// import Button from "../Button";
import React, { useState } from "react";
import './ForgotPassword.css';
import { Link } from "react-router-dom";

    
    
    
    function ForgotPassword() {
        const [email, setEmail] = useState("");
    
    
        // function validateForm() {
        //     return email.length > 0;
        // }
    
        function handleSubmit(event) {
            event.preventDefault();
        }
    
        return ( 
            <div className = "container center-form" >
           
             <div className = "fPassword col-lg-5" >
          
            <form onSubmit = { handleSubmit }
            controlid = "email" >
       <p className="fw-bold">Enter your Email</p>
       
       <div className="my-4">
       <label 
            htmlFor = "FormControlInput1"
            className = "form-label my-4" > Email
       </label>
             <input className = "form-control "
            type = "email"
            value = { email }
            onChange = {(e) => setEmail(e.target.value)}/>
       </div>
          
    
      <div className="buttons">

      <Link to="/setupPassword" className=" btn btn-primary my-4 text-decoration-none">
             Proceed
       </Link>
      {/* <Button
            className = "btn btn-primary my-4 "
            text = "Proceed"
            disabled = {!validateForm() }
            /> */}
      </div>
    
      </form> 
         </div >   
    </div > 
        );
    }
    

export default ForgotPassword
