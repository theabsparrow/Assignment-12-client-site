import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import AllSurveys from "../pages/AllSurveys";
import SurveyDetails from "../pages/SurveyDetails";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRout from "./PrivateRout";
import Statistic from "../components/dashboard/common/statistic/Statistic";
import AllPayments from "../components/dashboard/admin/allPayments/AllPayments";
import AllUsers from "../components/dashboard/admin/allUsers/AllUsers";
import CreatSurvey from "../components/dashboard/surveyor/creatSurvey/CreatSurvey";
import UpdateSurvey from "../components/dashboard/surveyor/updateSurvey/UpdateSurvey";
import MySurveys from "../components/dashboard/user/mySurveys/MySurveys";
import Report from "../components/dashboard/user/report/Report";
import MyComments from "../components/dashboard/proUser/myComments/MyComments";
import TotalSurveys from "../components/dashboard/common/totalSurveys/TotalSurveys";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/profile',
                element: <PrivateRout><Profile></Profile></PrivateRout>
            },
            {
                path: '/allsurveys',
                element: <AllSurveys></AllSurveys>
            },
            {
                path: '/survey/:id',
                element: <SurveyDetails></SurveyDetails>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRout><DashboardLayout></DashboardLayout></PrivateRout>,
        children: [
            // common rout
            {
                index: true,
                element: <Statistic></Statistic>
            },
            // common rout for admin and surveyor only
            {
                path: 'totalSurveys',
                element: <TotalSurveys></TotalSurveys>
            },


            // admin access rout
            {
                path: 'allPayments',
                element: <AllPayments></AllPayments>,
            },
            {
                path: 'allUser',
                element: <AllUsers></AllUsers>
            },


            // surveyor access rout
            {
                path: 'creatSurvey',
                element: <CreatSurvey></CreatSurvey>,
            },
            {
                path: 'updateSurvey',
                element: <UpdateSurvey></UpdateSurvey>,
            },


            // user access rout
            {
                path: 'mySurveys',
                element: <MySurveys></MySurveys>,
            },
            {
                path: 'report',
                element: <Report></Report>,
            },

            
            // pro-user access rout
            {
                path: 'myComment',
                element: <MyComments></MyComments>
            }
        ]
    }
])