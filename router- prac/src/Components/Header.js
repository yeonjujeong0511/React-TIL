import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const HeaderBox = styled.div`
  width: 1280px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
  & > a:nth-child(1) {
    text-decoration: none;
    font-size: 40px;
  }

  & > a {
    text-decoration: none;
    font-size: 25px;
    color: white;
    font-family: "Nanum Gothic";
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Link to="/">오렌지카페</Link>
        <Link to="/coffee">coffee</Link>
        <Link to="/Tea">Tea</Link>
        <Link to="/Ade">ade</Link>
        <Link to="/Juice">juice</Link>
      </HeaderBox>
      <Outlet />
    </>
  );
};

export default Header;
