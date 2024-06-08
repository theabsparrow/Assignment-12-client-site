import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="min-h-screen relative font-poppins px-[60px]">
            <div>
               <Sidebar></Sidebar>
            </div>
            <div className="flex-1">
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;