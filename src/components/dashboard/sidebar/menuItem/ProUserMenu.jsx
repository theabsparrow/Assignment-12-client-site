import { FaCommentDots } from "react-icons/fa";
import MenuItem from "./MenuItem";


const ProUserMenu = () => {
    return (
        <>
        <MenuItem label={"My Comments"} address={'myComment'} icon={FaCommentDots}></MenuItem>
        </>
    );
};

export default ProUserMenu;