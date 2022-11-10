import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../style.scss"

const Home = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
       axios
       .get("http://api.supplywestock.com:3001/v1/buyers")
       .then((res) => {
        setData(res.data.data);
       })
    }, [])

    console.log(Data);

  return (
    <div>
        <h1>Registration List</h1>
        <table border='true'>
            <thead>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile no</th>
            </thead>
            
                {
                    Data.map((data) => {
                        return(
                            <tbody>
                              <td>{data._id}</td>
                              <td>{data.firstName}</td>
                              <td>{data.lastName}</td>
                              <td>{data.emailId}</td>
                              <td>{data.mobileNo}</td>
                            </tbody>
                        )
                    })
                }
            
        </table>
    </div>
  )
}

export default Home