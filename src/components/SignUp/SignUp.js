import Button from "../Button";
import "./SignUp.css";
import React, { useState } from "react";
import {FaEye} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";
import { Link } from "react-router-dom";


function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");

    // this.state = {
    //     password: '',
    //     confirmPassword: ''
    // }
    
    // handleSubmit = () => {
    //     const { password, confirmPassword } = this.state;
    //     // perform all neccassary validations
    //     if (password !== confirmPassword) {
    //         alert("Passwords don't match");
    //     } else {
    //         // make API call
    //     }
    // }
    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        console.log("beauty")
        
        // const { password, confirmPassword } = this.state;
        // // perform all neccassary validations
        // if (password !== confirmPassword) {
        //     alert("Passwords don't match");
        // } else {
        //     // make API call
        // }
    }

    return ( 
        <div className = "container align center-form" >
       
         <div className = "col-lg-5" >
      
        <form onSubmit = { handleSubmit }
        controlid = "email" className="signUp " >
   <p className="fw-bold">Welcome! Create your account </p>
   <div className="my-4">
   <label 
        htmlFor = "FormControlInput1"
        className = "form-label" > Full Name
   </label>
         <input className = "form-control "
        type = "email"
        value = { name }
        onChange = {(e) => setName(e.target.value)}/>
   </div>
   <div className="my-4">
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
       <div class="input-group mb-3">
       
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
</div>
<div className="my-4">
       <label 
        htmlFor = "FormControlInput1" 
        className="form-label">Confirm Password 
       </label> 
       <div className="input-group mb-3">
       
       <input className = 'form-control '
        type = "password"
        value = { confirmpassword }
        onChange = {
            (e) => setconfirmPassword(e.target.value)
        }/> 
  
  <div className="input-group-text">
<FaEye/>
</div>

</div>
</div>
  <div className="buttons">
  <Button 
        className = "btn btn-primary my-2 col-lg-6 "
        text = "Sign up"
        disabled = {!validateForm() }
        
        />
 
  </div>
  <p className="text-center">Already have an account?   <Link to="/signIn" className="mx-1 text-decoration-none">
              Sign In
       </Link></p>
         </form> 
         <p className="fw-bold text-center my-1">OR</p>
         <p className="my-2 text-center">Sign in with </p>
<div className="logos">
     <FaLinkedinIn className="social-icon"/>
     <FcGoogle className="social-icon" />
     <FaFacebookF className="social-icon"/>
</div>
         </div > 

  
         </div>

    );
}


export default SignUp
