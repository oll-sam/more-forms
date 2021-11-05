import React, { useState } from  'react';
    
    
const Forms = (props) => {
    const [firstname, setFirstname] = useState("");    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [confirmPasswordError, setConfirmPasswordError] = useState("");  
    const [beenSubmitted, setBeenSubmitted] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setBeenSubmitted(true);

    };

    const validateFirstname = (e) =>{
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 2 characters or longer!");
        } else{
            setFirstnameError()
        }
    }

    const validateEmail = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else{
            setEmailError()
        }
    }

    const validatePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else{
            setPasswordError()
        }
    }

    const validateConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Password is required!");
        } else if(e.target.value !== password) {
            setConfirmPasswordError("Password must match!");
        }
        else{
            setConfirmPasswordError()
        }
    }
    
    return(
        <form onSubmit={ createUser }>
            {
                beenSubmitted ?
                <h3>Thank you for your submission!</h3> :
                <h3>Please Submit Form</h3>
            }
            {
                firstnameError ?
                <p style={{color:'red'}}>{ firstnameError }</p> :
                " "
            }                
            {
                emailError ?
                <p style={{color:'red'}}>{ emailError }</p> :
                " "
            }
            {
                passwordError ?
                <p style={{color:'red'}}>{ passwordError }</p> :
                " "
            }
            {
                confirmPasswordError ?
                <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                " "
            }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ validateFirstname } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ validateEmail } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ validatePassword } />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={ validateConfirmPassword } />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>

            </div>
        </form>
    );
};

export default Forms;