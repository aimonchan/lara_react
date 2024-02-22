import { Link } from "react-router-dom";
export default function Login(){
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }
    return(
        
        <form class="form-inline">
            <h4 className="text-center">Login</h4>
            <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email"></input>
            </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control"></input>
        </div>
        <div class="checkbox">
            <label><input type="checkbox"></input> Remember me</label>
        </div>
        <div className="text-center nav-link">
            <Link to="/signup">Don't you have an account?</Link>
        </div>
        <button onSubmit={onSubmit} type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}