import { useEffect, useState } from "react";

const Maptest = () => {
  const { naver } = window;

  const [address, setAddress] = useState();
  const [roadAddress, setRoadAddress] = useState(null);

  const [lat, setLat] = useState(37.3595704);
  const [lng, setLng] = useState(127.105399);
  const [zoom, setZoom] = useState(12);

  const handleChange = (e) => {
    const { address, value } = e.target;
    const newAddress = { address: value };
    setAddress(newAddress);
  };

  const serchAdress = (address) => {
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK)
          return alert("something wrong!");
        // 제대로 된 query가 들어가먄 response가 return 되는 경우
        let result = response.v2; // 검색 결과의 컨테이너
        items = result.addresses; // 검색결과의 배열

        let x = parseFloat(items[0].x); // 경도
        let y = parseFloat(items[0].y); // 위도

        setLat(y); // 위도 상태 변경
        setLng(x); // 경도 상태 변경
        setZoom(15);
        setRoadAddress(items[0].roadAddress);
        // 도로명 주소
      }
    );
  };

  return (
    <>
      <h1>map.js</h1>
      <div id="map" style={{ width: "100%", height: "600px" }}></div>
      <div>
        <form>
          <input
            className="findAddress"
            placeholder="주소로 검색"
            onChange={handleChange}
          />
          <button
            className="submit-button"
            type="submit"
            onClick={() => {
              serchAdress(address.address);
            }}
          >
            클릭
          </button>
        </form>
      </div>
    </>
  );
};

export default Maptest;
