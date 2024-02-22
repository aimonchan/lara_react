import { Link } from "react-router-dom";
export default function Signup(){
    return(
    
        <form class="form-inline">
            <h1 className="text-center">Sign Up</h1>
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
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}