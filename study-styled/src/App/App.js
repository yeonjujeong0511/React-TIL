import "./App.css";
import StyledComponenet from "../Components/StyledComponents";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whiteSmoke",
  backgroundColor: "#111",
};

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <StyledComponenet></StyledComponenet>
      </ThemeProvider>
    </>
  );
}

export default App;
