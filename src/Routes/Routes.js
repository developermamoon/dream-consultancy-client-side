import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetailPage from "../Pages/Services/ServiceDetailPage";
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

        { path: '/service/:id', element: <ServiceDetailPage></ServiceDetailPage>, loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)},

        { path: '/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>},
        { path: '*', element: <ErrorPage></ErrorPage>},
    ]}
])

export default route;