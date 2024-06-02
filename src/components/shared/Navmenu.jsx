import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Navmenu = ({ address, label }) => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive? "text-lg text-[#859770] bg-white rounded-xl px-3 py-2 font-medium": "text-white px-3 py-2 font-medium text-lg hover:text-[#859770] hover:bg-[white] hover:rounded-xl"}
                to={address}>
                {label}</NavLink>
        </div>
    );
};

Navmenu.propTypes = {
    address:PropTypes.string,
    label:PropTypes.string,
    
}
export default Navmenu;