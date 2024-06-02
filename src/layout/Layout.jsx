import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Layout = () => {
    const location = useLocation()
    const noNavbar = location.pathname.includes('/')
    return (
        <div>
            {noNavbar|| <Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;