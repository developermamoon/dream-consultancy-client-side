import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const route = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
        {path: '/login', element: <Login></Login>},
        { path: '/signup', element: <SignUp></SignUp>},
    ]}
])

export default route;