

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';



const PrivateRout = ({ children }) => {
    const { user, loader } = useAuth()
    const location = useLocation()

    if (loader) {
        return <div className="flex justify-center mt-4 mb-4 min-h-[calc(100vh-466px)]">
            <div className="flex flex-col m-8 rounded shadow-md animate-pulse">
                <div className="h-48 rounded-t dark:bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                </div>
            </div>
        </div>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/Login' replace={true}></Navigate>
    }
};

PrivateRout.propTypes = {
    children: PropTypes.node
}
export default PrivateRout;