import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/signup', element: <SignUp></SignUp>},
        {path: '/services', element: <Services></Services>},
        {path: '/blogs', element: <Blogs></Blogs>},
        { path: '/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>},
    ]}
])

export default route;