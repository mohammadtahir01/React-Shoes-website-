import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/component/home";
import Men from "./assets/mainPage/mendata";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="men" element={<Men/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;