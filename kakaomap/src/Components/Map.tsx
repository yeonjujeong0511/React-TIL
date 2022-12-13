import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        36.349286539618234,
        127.37768781658409
      ),
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const marker = new window.kakao.maps.Marker({
      position: options.center,
    });

    const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });
    let map = new window.kakao.maps.Map(container, options);
    marker.setMap(map);
    // 기본 지도
    //console.log(map);

    window.kakao.maps.event.addListener(
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
          if (status === window.kakao.maps.services.Status.OK) {
            //console.log(result[0]);
            let resultAddr =
              result[0].road_address === null
                ? `지번 주소 : ${result[0].address.address_name}`
                : `도로명 주소 : ${result[0].road_address.address_name}`;
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

  return <div id="map" style={divStyling}></div>;
};

export default Map;
