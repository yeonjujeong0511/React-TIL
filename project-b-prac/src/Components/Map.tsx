import { useEffect } from "react";
const Map = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 15,
      });
    };
    initMap();
  }, []);
  const mapStlye = {
    width: "100%",
    height: "600px",
  };

  return (
    <>
      <h1>map</h1>
      <div id="map" style={mapStlye}></div>
    </>
  );
};

export default Map;

// map api 사용
