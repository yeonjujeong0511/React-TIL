import { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const Map = () => {
  const [lat, setLat] = useState(37.554722);
  const [lng, setLng] = useState(126.970833);

  const { naver } = window;
  const NAVER_KEY = process.env.REACT_APP_NAVER_ID;
  //console.log(naver.maps.Event.addDOMListener);

  //const navermaps = window.naver.maps;
  // console.log(navermaps);
  const divStyling = {
    width: "100%",
    height: "800px",
  };
  // naver.maps.addDOMListener("click", console.log("click"));
  // window.naver.maps.Event.addDOMListener("map", "click", () => {
  //   const coordinate = { x: map };
  // });

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={NAVER_KEY}
      error={<p>Maps load Error</p>}
      loading={<p>Maps Loading...</p>}
      submodules={["geocoder"]}
    >
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"}
        style={divStyling}
        center={{ lat: lat, lng: lng }}
        zoom={15}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
