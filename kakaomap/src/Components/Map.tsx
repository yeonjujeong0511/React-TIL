import { useEffect, useRef, useState } from "react";
import axios from "axios";
import cctvImg from "../image/cctv.svg";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { kakao } = window;
  const [cctvData, setcctvData] = useState();
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const API_KEY = "185891a7bc29448b861eb0ff3a718c0d";
    const url = `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${API_KEY}&type=ex&cctvType=1&minX=127.303832&maxX=127.444058&minY=36.310383&maxY=36.393645&getType=json`;

    class CCTV {
      coordx: string;
      coordy: string;
      constructor(coordx: string, coordy: string) {
        this.coordx = coordx;
        this.coordy = coordy;
      }
    }
    const cctvArr: any = [];
    axios.get(url).then((res) => {
      const data = res.data.response.data;
      console.log(data);

      data.forEach((element: any) => {
        //console.log(element.coordx);
        //console.log(element.coordy);
        cctvArr.push(new CCTV(element.coordx, element.coordy));
      });
      //console.log(cctvArr);
      setcctvData(cctvArr);
    });

    const container = mapRef.current;
    let options = {
      center: new kakao.maps.LatLng(36.349286539618234, 127.37768781658409),
      level: 7, //지도의 레벨(확대, 축소 정도)
    };
    // 지도 생성
    // 기본 지도
    const map = new kakao.maps.Map(container, options);

    const dummy = [
      {
        latlng: new kakao.maps.LatLng(36.36389, 127.33167),
      },
      {
        latlng: new kakao.maps.LatLng(36.37355275, 127.4310764),
      },
    ];

    // ! dummy data로 cctv 마커 찍기
    // for (var i = 0; i < dummy.length; i++) {
    //   // 마커 이미지의 이미지 크기 입니다
    //   var imageSize = new kakao.maps.Size(24, 35);

    //   // 마커 이미지를 생성합니다
    //   var markerImage = new kakao.maps.MarkerImage(cctvImg, imageSize);

    //   // 마커를 생성합니다
    //   var marker2 = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     position: dummy[i].latlng, // 마커를 표시할 위치
    //     image: markerImage, // 마커 이미지
    //   });
    // }

    console.log(cctvArr);
    for (let i = 0; i < cctvArr.length; i++) {
      const imgSize = new kakao.maps.Size(24, 35);
      const makerImg = new kakao.maps.MarkerImage(cctvImg, imgSize);
      const marker3 = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(cctvArr[i].coordy, cctvArr[i].coordx),
        image: makerImg,
      });
    }

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: options.center,
    });
    marker.setMap(map);
    //console.log(map);

    // 일반지도 스카이뷰 지도 타입 전환 컨트롤생성
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도 타입 컨트롤 지도에 표시
    // 오른쪽 위에 생성
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 줌 컨트롤러생성 후 오른쪽 위에 위치
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //인포위도우
    const infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    kakao.maps.event.addListener(
      map,
      "click",
      function (mouseEvent: any) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        let latlng = mouseEvent.latLng;
        // console.log(mouseEvent);
        //console.log(latlng);
        // setLat(latlng.getLat());
        //setLng(latlng.getLng());
        searchDetailAddrFromCoords(latlng, function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            console.log(result[0]);
            let resultAddr =
              result[0].road_address === null
                ? `지번 주소 : ${result[0].address.address_name}`
                : `도로명 주소 : ${result[0].road_address.address_name} ${result[0].road_address.building_name} `;
            console.log(resultAddr);

            marker.setPosition(latlng);
            marker.setMap(map);
            infowindow.setContent(resultAddr);
            infowindow.open(map, marker);
          }
        });
      }
      // const iwContent = `<div style="padding:5px;">Hello World!</div>`;
      // const infowindow = new window.kakao.maps.InfoWindow({
      //   postion: latlng,
      //   content: iwContent,
      // });
      // infowindow.open(map, marker);
    );

    // 커스텀 오버레이
    const button1 = `<button id="button-1">교통상황</button>`;
    // 커스텀 오버레이 표시될 위치
    const button1Position = map.getCenter();
    const button1Overlay = new window.kakao.maps.CustomOverlay({
      position: button1Position,
      content: button1,
    });
    button1Overlay.setMap(map);
    // console.log(button1);
    // const button_1 = document.getElementById("button-1");

    // button_1.addEventListener("click", function () {
    //   map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
    // });

    window.kakao.maps.event.addListener(
      marker,
      "mouseover",
      function (mouseover: any) {}
    );
  }, []);

  //주소 - 좌표 변환 객체를 생성
  const geocoder = new window.kakao.maps.services.Geocoder();

  // 좌표로 행정동 주소 정보를 요청합니다
  function searchAddrFromCoords(coords: any, callback: any) {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }

  // 좌표로 법정동 상세 주소 정보를 요청합니다.
  function searchDetailAddrFromCoords(coords: any, callback: any) {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  const divStyling = {
    width: "100%",
    height: "800px",
  };

  // const buttonStyle = {
  //   width: "40px",
  //   height: "20px",
  //   background-color : "blue"
  // };

  return (
    <>
      <div ref={mapRef} style={divStyling}></div>
      <div></div>
    </>
  );
};

export default Map;
