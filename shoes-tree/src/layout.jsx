import { Outlet } from "react-router-dom";
import NavTop from "./assets/mainPage/nav";

const Layout=()=>{
    return(
        <>
        <NavTop/>
        <Outlet/>
        </>
    )
}
export default Layout;