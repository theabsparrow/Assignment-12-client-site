import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const ProUserRoute = ({children}) => {
    const [role, isLoading] = useRole();
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    if(role === 'Pro-User') return children;
    return <Navigate to='/dashboard'></Navigate>;
};
ProUserRoute.propTypes = {
    children:PropTypes.element
}
export default ProUserRoute;