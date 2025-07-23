import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/component/home";
import Men from "./assets/mainPage/mendata";
import Women from "./assets/mainPage/womendata";
import Shop from "./assets/mainPage/shop";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="men" element={<Men/>}/>
       <Route path="women" element={<Women/>}/>
       <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;