import { Outlet, Navigate } from "react-router-dom"
import "./GuestLayout.css"
import { useStateContext } from "../contexts/ContextProvider"

export default function GuestLayout(){

    const {token} = useStateContext();
    if (token){
        return <Navigate to="/users" />
    };

   
    return(
        <div class Name="container-float">
            <div className="bg-light text-dark width-50 center mt-5 h-auto">
            <div className="container-float p-3">
               <Outlet/>
            </div>
            </div>
        </div>
    )
}