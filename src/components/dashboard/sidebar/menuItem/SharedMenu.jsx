import { MdDoneAll } from "react-icons/md";
import MenuItem from "./MenuItem";


const SharedMenu = () => {
    return (
        <>
        <MenuItem label={"Total Survey"} address={'totalSurveys'} icon={MdDoneAll}></MenuItem>
        </>
    );
};

export default SharedMenu;