import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Applayout from "../Layout/Applayout";
import Home from "../Components/Home/Home";
import Aminities from "../Components/Aminities/Aminities";
import Login from "../Pages/LoginPage/Login";
import Pagelayout from "../Layout/Pagelayout";
import Accomodation from "../Pages/Accomodation/Accomodation";
import Gallery from "../Pages/Gallery/Gallery";
import Register from "../Pages/Registration/Register";




export const routes = createBrowserRouter([{
    id:"root",
    path:"/",
    element:<Outlet />,
    children:[
        {
            index:true,element:<Navigate to="/login" replace/>      
        },
        {
            path:"/register",
            element:<Register/>
        },

        {
            path:"/",
            element:<Applayout/>,
            children:[
                {
                    path:"/home",
                    element:<Home/>
                },
            ]
        },
        {
            path:"/",
            element:<Pagelayout/>,
            children:[

                {
                   path:"/accomodation",
                   element:<Accomodation/>
                },
                {
                    path:"/gallery",
                    element:<Gallery/>
                },
                {
                    path:"/thingstodo",
                    element:""
                },
                {
                    path:"/aboutus",
                    element:""
                },
                {
                    path:"/contactus",
                    element:""
                },
                {
                    path:"/aminities",
                    element:<Aminities/>
                }
            ]
        },
        {
            path:"",
            element:<Outlet />,
            children:[
                { index: true, element: <Navigate to="/login" replace /> },
                { path: "login", element: <Login/> },
            ]
        }   
    ]
}])