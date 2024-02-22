import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function DefaultLayout(){
    const{user,token}=useStateContext();
    if(!token){
        return <Navigate to="/login" />
    }
  
    return(
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/users" className="nav-link" type="button">Users</Link>
                    </li>                 
                </ul>
                
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"></img>
                        <span class="d-none d-sm-inline mx-1">User</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"></hr>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            <main>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <a class="navbar-brand" href="#">User Info</a>
            </nav>
                <Outlet/>
            </main>
        </div>
    </div>
</div>
    )
}

export default DefaultLayout;