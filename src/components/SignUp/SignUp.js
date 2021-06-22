import Button from "../Button";
import "./SignUp.css";
import React, { useState } from "react";
import {FaEye} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";


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
        <div className = "container center-form" >
       
         <div className = "signUp col-lg-5" >
      
        <form onSubmit = { handleSubmit }
        controlid = "email" >
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
  <p className="text-center my-2">Already have an account?  <a href='./SignIn'>Sign in</a></p>
         </form> 
         </div > 

         <p className="fw-bold my-1">OR</p>
         <p>Sign in with </p>
<div className="logos">
     <FaLinkedinIn className="social-icon"/>
     <FcGoogle className="social-icon" />
     <FaFacebookF className="social-icon"/>
</div>
         </div>

    );
}


export default SignUp
