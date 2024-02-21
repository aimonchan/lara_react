import {createBrowserRouter} from "react-router-dom";
import Users from "./views/Users";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/Notfound";
const router= createBrowserRouter([
    {
        path: "/",
        element:<GuestLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>      
            },
            {
                path:"/signup",
                element:<Signup/>
        
            },
        ]
    },
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            {
                path:"/users",
                element:<Users/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>      
            },
        ]
    },
    
    {
        path:'*',
        element: <NotFound/>
    },
])

export default router;