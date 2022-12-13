import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const NaverMapApi = (props) => {
  const NAVER_KEY = process.env.REACT_APP_NAVER_ID;

  const divStyling = {
    width: "100%",
    height: "800px",
  };
  console.log(props);
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={NAVER_KEY}
      error={<p>Maps load Error</p>}
      loading={<p>Maps Loading...</p>}
      submodules={["geocoder"]}
    >
      <NaverMap
        mapDivId={"map"}
        style={divStyling}
        center={{ lat: props.lat, lng: props.lat }}
        zoom={15}
      >
        <Marker
          position={{ lat: props.lat, lng: props.lat }}
          title={props.roadAddress}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverMapApi;
