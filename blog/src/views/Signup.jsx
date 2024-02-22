import { Link } from "react-router-dom";
export default function Signup(){
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }
    return(
    
        <form class="form-inline">
            <h4 className="text-center">Sign Up</h4>
            <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email"></input>
            </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control"></input>
        </div>
        <div class="form-group">
            <label for="pwd">Confirm Your Password:</label>
            <input type="password" class="form-control"></input>
        </div>
        
        <div className="text-center nav-link">
            <Link to="/login">Already have an account!</Link>
        </div>
        <button onSubmit={onSubmit} type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}