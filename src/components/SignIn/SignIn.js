import React, { useState } from "react";
import "./SignIn.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import {FaEye} from "react-icons/fa"


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    

    return ( 
        <div className = "container center-form" >
       
         <div className = "signIn col-lg-5" >
      
        <form onSubmit = { handleSubmit }
        controlid = "email" >
   <p className="fw-bold">Sign in into your account </p>

   <div className="my-5">
   <label 
        htmlFor = "FormControlInput1"
        className = "form-label" > Email
   </label>
         <input className = "form-control "
        type = "email"
        value = { email }
        onChange = {(e) => setEmail(e.target.value)}/>
   </div>
      

   <div className="my-4">
       <label 
        htmlFor = "FormControlInput1" 
        className="form-label">  Password 
       </label> 
       <div className="input-group mb-3">
       
       <input className = 'form-control '
        type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }/> 
  
  <div className="input-group-text">
<FaEye/>
</div>

</div>
<div className='fpassword'>
        <Link to="/forgotPassword" className=" my-2 text-decoration-none">Forgot Password</Link>
          
        </div>
</div>
        
       
        

       
   <div className="buttons">

       <Button
         className = "btn btn-primary col-lg-5"
        text = 'Login'
        disabled = {!validateForm() }></Button>
    
   </div>
  <p className="text-center my-4 ">New here?   
     <Link to="/signUp" className="mx-1 text-decoration-none">
              Create an account
       </Link>
        </p>
         </form> 
         </div > 
         </div>

    );
}

export default SignIn