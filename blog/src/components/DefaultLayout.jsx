import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function DefaultLayout(){
    const{user,token}=useStateContext();
    if(!token){
        return <Navigate to="/login" />
    }
  
    return(
        <>
        <div>
        DefaultLayout
        </div>
        <Outlet/>
        </>
    )
}

export default DefaultLayout;