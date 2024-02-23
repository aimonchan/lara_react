import { Link } from "react-router-dom";
export default function Signup(){
    
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }

    return(
    
        <form class="form-inline" onSubmit={onSubmit}>
            <h4 className="text-center">Sign Up For Free!</h4>
            <input placeholder="Full Name" type="text" class="form-control mt-3 mb-1" id="email"></input>
            <input placeholder="Email Address" type="email" class="form-control mt-3 mb-1" id="email"></input>
            <input placeholder="Password" type="password" class="form-control mt-3 mb-1"></input>      
            <input placeholder="Confirm your Password" type="password" class="form-control mt-3 mb-3"></input>
    
                
            <Link className="text-center nav-link mb-3 text-primary" to="/login">Already have an account!</Link>
            <button class="btn btn-primary w-100">Submit</button>
        </form>
    )
}