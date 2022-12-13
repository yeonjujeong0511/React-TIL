import { useState } from "react";
import NaverMapApi from "./NaverMapApi";

const NaverMaps = () => {
  const { naver } = window;

  const [address, setAddrress] = useState("");
  const [roadAddress, setRoadAddress] = useState(null);

  const [lat, setLat] = useState(37.554722);
  const [lng, setLng] = useState(126.970833);
  //const navermaps = window.naver.maps;

  // const handleChange = (e) => {
  //   const { address, value } = e.target;
  //   console.log(address);
  //   console.log(value);
  //   const newAddress = { address: value };
  //   console.log(newAddress);
  //   setAddrress(newAddress);
  // };

  // function searchAddress(address) {
  //   console.log(naver.maps.Service.geocode);
  //   console.log(address);
  //   naver.maps.Service.geocode(
  //     {
  //       query: address,
  //     },
  //     function (status, response) {
  //       if (status !== naver.maps.Service.status.OK) return alert("문제!");

  //       let result = response.v2,
  //         items = result.addresses;
  //       let x = parseFloat(items[0].x);
  //       let y = parseFloat(items[0].y);
  //       setLat(x);
  //       setLng(y);
  //       setRoadAddress(items[0].roadAddress); // 도로명 주소
  //     }
  //   );
  // }

  return (
    <>
      <NaverMapApi lat={lat} lng={lng} />
      {/* <div>
        <form>
          <input
            className="findAddress"
            placeholder="주소로 검색"
            onChange={handleChange}
          />
          <button
            className="submit-address"
            type="submit"
            onClick={() => {
              searchAddress(address.address);
            }}
          >
            검색
          </button>
        </form>
      </div> */}
    </>
  );
};

export default NaverMaps;
