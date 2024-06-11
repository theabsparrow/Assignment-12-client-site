import { MdOutlineCreateNewFolder } from "react-icons/md";
import MenuItem from "./MenuItem";


const SurveyorMenu = () => {
    return (
        <>
            <MenuItem label={"Create Survey"} address={'creatSurvey'} icon={MdOutlineCreateNewFolder}></MenuItem>
           
        </>
    );
};

export default SurveyorMenu;