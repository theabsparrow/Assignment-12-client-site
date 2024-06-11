import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Navmenu = ({ address, label, icon:Icon }) => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive? "text-lg text-[#859770] bg-white rounded-xl px-3 py-2 font-medium flex items-center gap-1": "text-white px-3 py-2 font-medium text-lg hover:text-[#859770] hover:bg-[white] hover:rounded-xl flex items-center gap-1"}
                to={address}>
                {label} 
                {
                    Icon && <Icon className='text-yellow-500 text-3xl'></Icon>
                }
                </NavLink>
        </div>
    );
};

Navmenu.propTypes = {
    address:PropTypes.string,
    label:PropTypes.string,
    icon:PropTypes.func,
}
export default Navmenu;