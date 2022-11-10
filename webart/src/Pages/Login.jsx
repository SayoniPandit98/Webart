import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import "../style.scss"
import PhoneInput from 'react-phone-number-input/input'

const Login = () => {


    function PhoneNumber(value){
        if (!value){
            return value
        }

        const phnb = value.replace(/[^\d]/g, "")
        const phnblen = phnb.length;
        if(phnblen < 4) return phnb
        if(phnblen < 7) {
            return `(${phnb.slice(0,3)}) ${phnb.slice(3)}`
        }
        return  `(${phnb.slice(0,3)}) ${phnb.slice(
            3,
            6,
        )} ${phnb.slice(6,10)}`
    }

    const navigate = useNavigate()
    const [Err, setErr] = useState("")

    const [FirstName, setFirstName] = useState("")
    const handleFirstName = (e) => {
        setFirstName(e.target.value.replace(/[^a-z]/gi, ''))
    }

    const [LastName, setLastName] = useState("")
    const handleLastName = (e) => {
        setLastName(e.target.value.replace(/[^a-z]/gi, ''))
    }

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

    const [Mobile, setMobile] = useState("")
    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

   

    const handleSubmit = (e) => {
        e.preventDefault()

        const Data = {
            firstName : FirstName,
            lastName :LastName,
            emailId :Email, 
            password:Password,
            mobileNo:Mobile
        }

       

        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     

 
        if(FirstName.length <= 2){
            setErr("Name is too small")
            return
        
        } else if(LastName.length <= 2){
            setErr("Last Name is too small")
            return
          
        }  else if (!Password.match(passw)){
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
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="Signup">
            
            <input type="text"  placeholder='First Name' value={FirstName} onChange={handleFirstName}/>
          

            <input type="text"  placeholder='Last Name' value={LastName} onChange={handleLastName}/>
           


            <input type="email"  placeholder='Email' value={Email} onChange={handleEmail}/>
            <input type="password"  placeholder='Password' value={Password} onChange={handlePassword}/>
           
            {/* <PhoneInput
      country="US"
      value={Mobile}
      onChange={setMobile} /> */}
            <input  placeholder='Mobile no' value={PhoneNumber(Mobile)} onChange={handleMobile}/>
            <button type='submit'>Submit</button>
           
        </form>
        <div>{Err}</div>
    </div>
  )
}

export default Login