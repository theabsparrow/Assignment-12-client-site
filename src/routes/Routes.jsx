import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import AllSurveys from "../pages/AllSurveys";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/allsurveys',
                element: <AllSurveys></AllSurveys>
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
    }
])