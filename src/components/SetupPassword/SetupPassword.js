import Button from "../Button";
import './SetupPassword.css';
import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaEye} from "react-icons/fa"

function SetupPassword() {
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");

    function validateForm() {
        return password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <div className = "container center-form" >
       
         <div className = "sPassword col-lg-5" >
      
        <form onSubmit = { handleSubmit }
        controlid = "email" >
         <p className="fw-bold">Setup New Password</p>


   



       <div className="my-4">
       <label 
        htmlFor = "FormControlInput1" 
        className="form-label"> New Password 
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
</div>
     

 <div className="my-4">
       <label 
        htmlFor = "FormControlInput1" 
        className="form-label"> Confirm Password 
       </label> 
       <div class="input-group mb-3">
       
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
  <Button className = "btn btn-primary "
        text = 'Submit'
        disabled = {!validateForm() }
        />
  </div>

  </form>
   </div>
</div>
    );
}



export default SetupPassword
