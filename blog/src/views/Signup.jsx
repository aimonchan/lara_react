import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Signup(){

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    
    const onSubmit=(ev)=>{
        ev.preventDefault();
        const payload = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        console.log(payload);
    }

    return(
    
        <form class="form-inline" onSubmit={onSubmit}>
            <h4 className="text-center">Sign Up For Free!</h4>
            <input ref={nameRef} placeholder="Full Name" class="form-control mt-3 mb-1"/>
            <input ref={emailRef} placeholder="Email Address"  class="form-control mt-3 mb-1" />
            <input ref={passwordRef} placeholder="Password" type="password" class="form-control mt-3 mb-1"></input>      
            <input ref={passwordConfirmationRef}placeholder="Confirm your Password" type="password" class="form-control mt-3 mb-3"></input>
    
                
            <Link className="text-center nav-link mb-3 text-primary" to="/login">Already have an account!</Link>
            <button class="btn btn-primary w-100">Submit</button>
        </form>
    )
}