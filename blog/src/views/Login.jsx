import { Link } from "react-router-dom";
export default function Login(){
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }
    return(
        
        <form class="form-inline" onSubmit={onSubmit}>
        <h4 className="text-center">Login</h4>
        <input placeholder="Email Address" type="email" class="form-control mt-3 mb-1" id="email"></input>
        <input placeholder="Password" type="password" class="form-control mt-3 mb-1"></input>      
                    
        <Link className="text-center nav-link mt-2 mb-3 text-primary" to="/signup">You don't have account!</Link>
        <button class="btn btn-primary w-100">Submit</button>
    </form>
    )
}