import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import "../style.scss"
import PhoneInput from 'react-phone-number-input/input'
import { Link } from 'react-router-dom'

const Login = () => {



    const navigate = useNavigate()
    const [Err, setErr] = useState("")

    const [Email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [Password, setPassword] = useState("")
    const handlePassword = (e) => {

        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
       
            setPassword(e.target.value) 
  
        // setPassword(e.target.value)
    }

   

    const handleSubmit = (e) => {
        e.preventDefault()

        const Data = {
            emailId :Email, 
            password:Password,
        }

       

        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     

 
       if (!Password.match(passw)){
            setErr("Password must be a minimum of 7 characters and must be one Upper case, One lower case, a number, and a special character.")
        return
        }

    
        axios
        .post("http://api.supplywestock.com:3001/v1/buyers", Data)
        .then((res) => {
            navigate('/Home')
        })
    }

    


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="Signup">

            <input type="email"  placeholder='Email' value={Email} onChange={handleEmail}/>
            <input type="password"  placeholder='Password' value={Password} onChange={handlePassword}/>
            <button type='submit'>Submit</button>
           
        </form>
        <div>{Err}</div>
        <div>Don't have an account? <span><Link to="/Signup">Sign Up</Link></span></div>
    </div>
  )
}

export default Login