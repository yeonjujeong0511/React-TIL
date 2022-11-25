import ColorBox from "../components/ColorBox";
import { ColorProvider } from "../components/color";
import SelectColor from "../components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
