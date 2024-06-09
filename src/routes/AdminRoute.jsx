import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types';

const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole();
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    if(role === 'Admin') return children;
    return <Navigate to='/dashboard'></Navigate>;
};

AdminRoute.propTypes = {
    children:PropTypes.element
}
export default AdminRoute;