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
import AdminRoute from "./AdminRoute";
import SurveyorRoute from "./SurveyorRoute";
import SharedRoute from "./SharedRoute";

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
                element: <PrivateRout><Statistic></Statistic></PrivateRout>,
            },


            // common rout for admin and surveyor only
            {
                path: 'totalSurveys',
                element: (
                    <PrivateRout>
                        <SharedRoute>
                            <TotalSurveys>

                            </TotalSurveys>
                        </SharedRoute>
                    </PrivateRout>),
            },


            // admin access rout
            {
                path: 'allPayments',
                element: (
                    <PrivateRout>
                        <AdminRoute>
                            <AllPayments>

                            </AllPayments>
                        </AdminRoute>
                    </PrivateRout>),
            },
            {
                path: 'allUser',
                element: (
                    <PrivateRout>
                        <AdminRoute>
                            <AllUsers>

                            </AllUsers>
                        </AdminRoute>
                    </PrivateRout>),
            },


            // surveyor access rout
            {
                path: 'creatSurvey',
                element: (
                    <PrivateRout>
                        <SurveyorRoute>
                            <CreatSurvey>

                            </CreatSurvey>
                        </SurveyorRoute>
                    </PrivateRout>),
            },
            {
                path: 'updateSurvey',
                element: (
                    <PrivateRout>
                        <SurveyorRoute>
                            <UpdateSurvey>

                            </UpdateSurvey>
                        </SurveyorRoute>
                    </PrivateRout>),
            },


            // user access rout
            {
                path: 'mySurveys',
                element: (
                    <PrivateRout>
                        <MySurveys>

                        </MySurveys>
                    </PrivateRout>),
            },
            {
                path: 'report',
                element: (
                    <PrivateRout>
                        <Report>

                        </Report>
                    </PrivateRout>),
            },


            // pro-user access rout
            {
                path: 'myComment',
                element: (
                    <PrivateRout>
                        <MyComments>

                        </MyComments>
                    </PrivateRout>)
            }
        ]
    }
])