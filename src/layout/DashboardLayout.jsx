import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="min-h-screen relative font-poppins flex">
            <div>
               <Sidebar></Sidebar>
            </div>
            <div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;