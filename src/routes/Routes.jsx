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
import Payment from "../pages/Payment";
import ProUserRoute from "./ProUserRoute";
import SurveyResponse from "../components/dashboard/common/surveyresponse/SurveyResponse";


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
                path: '/allsurveys',
                element: <AllSurveys></AllSurveys>
            },
            {
                path: '/payment',
                element: (
                    <PrivateRout>
                        <Payment>

                        </Payment>
                    </PrivateRout>)
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
        path: '/survey/:id',
        element: <SurveyDetails></SurveyDetails>
    },
    {
        path: '/dashboard',
        element: <PrivateRout><DashboardLayout></DashboardLayout></PrivateRout>,
        children: [
            // common rout
            {
                path: '/dashboard',
                element: (
                    <PrivateRout>
                        <Profile>

                        </Profile>
                    </PrivateRout>)
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

            {
                path: 'surveyRespons',
                element: (
                    <PrivateRout>
                        <SharedRoute>
                            <SurveyResponse></SurveyResponse>
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
                path: 'totalSurveys/update',
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
                        <ProUserRoute>
                            <MyComments>

                            </MyComments>
                        </ProUserRoute>
                    </PrivateRout>)
            }
        ]
    }
])