import Main from "../Components/Main";
import Coffee from "../Components/Coffee";
import Tea from "../Components/Tea";
import Ade from "../Components/Ade";
import Juice from "../Components/Juice";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";

function App() {
  return(
    <Routes>
      
    <Route element={<Header></Header>}>
    <Route path='/' element={<Main/>} />
    <Route path='/coffee' element={<Coffee/>} />
    <Route path='/Tea' element={<Tea/>} />
    <Route path='/Ade' element={<Ade/>} />
    <Route path='/Juice' element={<Juice/>} />
    </Route>
    </Routes>
  )

}

export default App;
