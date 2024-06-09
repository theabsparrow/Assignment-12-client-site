import { MdPayment } from "react-icons/md";
import MenuItem from "./MenuItem";
import { CgProfile } from "react-icons/cg";


const AdminMenu = () => {
    return (
        <>
            <MenuItem label={"All Payemnts"} address={'allPayments'} icon={MdPayment}></MenuItem>
            <MenuItem label={"All Users"} address={'allUser'} icon={CgProfile}></MenuItem>
        </>
    );
};

export default AdminMenu;