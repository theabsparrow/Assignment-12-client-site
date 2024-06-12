import { MdDoneAll } from "react-icons/md";
import MenuItem from "./MenuItem";
import { SiSignal } from "react-icons/si";


const SharedMenu = () => {
    return (
        <>
        <MenuItem label={"Total Survey"} address={'totalSurveys'} icon={MdDoneAll}></MenuItem>
        <MenuItem label={"Survey responses"} address={'surveyRespons'} icon={SiSignal}></MenuItem>
        </>
    );
};

export default SharedMenu;