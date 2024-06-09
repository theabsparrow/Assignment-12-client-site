import { CiFaceFrown } from "react-icons/ci";
import MenuItem from "./MenuItem";
import { MdReportProblem } from "react-icons/md";


const UserMenu = () => {
    return (
        <>
            <MenuItem label={"My Surveys"} address={'mySurveys'} icon={CiFaceFrown}></MenuItem>
            <MenuItem label={"Report Surveys"} address={'report'} icon={MdReportProblem}></MenuItem>
        </>
    );
};

export default UserMenu;