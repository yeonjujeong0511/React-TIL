import "./App.css";
import StyledComponenet from "../Components/StyledComponents";
import { ThemeProvider } from "styled-components";
import Styled from "../Components/Styled";

const darkTheme = {
  textColor: "whiteSmoke",
  backgroundColor: "#333",
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledComponenet></StyledComponenet>
      <Styled></Styled>
    </ThemeProvider>
  );
}

export default App;
