import { MdOutlineCreateNewFolder } from "react-icons/md";
import MenuItem from "./MenuItem";
import { IoCreateSharp } from "react-icons/io5";


const SurveyorMenu = () => {
    return (
        <>
            <MenuItem label={"Create Survey"} address={'creatSurvey'} icon={MdOutlineCreateNewFolder}></MenuItem>
            <MenuItem label={"Update Survey"} address={'updateSurvey'} icon={IoCreateSharp}></MenuItem>
        </>
    );
};

export default SurveyorMenu;