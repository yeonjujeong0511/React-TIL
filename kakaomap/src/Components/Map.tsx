import { useEffect, useRef, useState } from "react";
import axios from "axios";
import cctvImg from "../image/cctv.svg";
import caurionImg from "../image/caution.svg";
import styled from "styled-components";
declare global {
  interface Window {
    kakao: any;
  }
}
const Overlay = styled.div`
  width: 300px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
`;

const Map = ({ searchPlace }: any) => {
  const { kakao } = window;
  const [cctvData, setcctvData] = useState();
  const [accidentData, setAccidentData] = useState(null);
  const [changeMaptype, setChangeMaptype] = useState("");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // // ! cctv 불러오는것
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const url = `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${API_KEY}&type=ex&cctvType=1&minX=127.303832&maxX=127.444058&minY=36.310383&maxY=36.393645&getType=json`;

    // class CCTV {
    //   coordx: string;
    //   coordy: string;
    //   constructor(coordx: string, coordy: string) {
    //     this.coordx = coordx;
    //     this.coordy = coordy;
    //   }
    // }

    const container = mapRef.current;
    let options = {
      center: new kakao.maps.LatLng(36.349286539618234, 127.37768781658409),
      level: 7, //지도의 레벨(확대, 축소 정도)
    };
    // 지도 생성
    // 기본 지도

    const map = new kakao.maps.Map(container, options);

    const content = `
    <div>
      <p>사고발생</p>
    </div>
    `;

    const accident_url = "http://127.0.0.1:5000/accident";
    axios.get(accident_url).then((res) => {
      const data = res.data;
      console.log(data);
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(caurionImg, imageSize);
      for (var i = 0; i < data.length; i++) {
        const accidentMarker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(
            data[i].locationDataY,
            data[i].locationDataX
          ), // 마커를 표시할 위치
          image: markerImage, // 마커 이미지
        });

        const accidentOverlay = new kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: accidentMarker.getPosition(),
        });

        kakao.maps.event.addListener(accidentMarker, "mouseover", function () {
          accidentOverlay.setMap(map);
        });

        // kakao.maps.event.addListener(accidentMarker, "click", function () {
        //   accidentOverlay.setMap(map);
        // });
        // function closeOverlay() {
        //     accidentOverlay.setMap(null);
        //   }
      }
    });

    // const cctvArr: any = [];
    // axios.get(url).then((res) => {
    //   const data = res.data.response.data;
    //   console.log(data);

    //   data.forEach((element: any) => {
    //     //console.log(element.coordx);
    //     //console.log(element.coordy);
    //     cctvArr.push(new CCTV(element.coordx, element.coordy));
    //   });
    //   //console.log(cctvArr);
    //   setcctvData(cctvArr);
    // });

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

    // console.log(cctvArr);
    // for (let i = 0; i < cctvArr.length; i++) {
    //   const imgSize = new kakao.maps.Size(24, 35);
    //   const makerImg = new kakao.maps.MarkerImage(cctvImg, imgSize);
    //   const marker3 = new kakao.maps.Marker({
    //     map: map,
    //     position: new kakao.maps.LatLng(cctvArr[i].coordy, cctvArr[i].coordx),
    //     image: makerImg,
    //   });
    // }

    // 돌발상황 마커 생성

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
    //   const button1 = `<button id="button-1">교통상황</button>`;
    //   // 커스텀 오버레이 표시될 위치
    //   const button1Position = map.getCenter();
    //   const button1Overlay = new window.kakao.maps.CustomOverlay({
    //     position: button1Position,
    //     content: button1,
    //   });
    //   button1Overlay.setMap(map);
    //   // console.log(button1);
    //   // const button_1 = document.getElementById("button-1");

    //   // button_1.addEventListener("click", function () {
    //   //   map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
    //   // });

    //   window.kakao.maps.event.addListener(
    //     marker,
    //     "mouseover",
    //     function (mouseover: any) {}
    //   );

    // 검색 결과 나오는 윈도우 만듬
    const searchindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places();

    // 장소검색 객체를 통해 키워드로 장소검색을 요청
    ps.keywordSearch(searchPlace, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          console.log(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: any) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 마우스오버 이벤트 등록합니다
      kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        searchindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        searchindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        searchindow.close();
      });
    }
  }, [searchPlace]);

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

  const onchane = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div ref={mapRef} style={divStyling}></div>
      {/* <button onClick={onclick}>교통정보 보기</button> */}
    </>
  );
};

export default Map;
