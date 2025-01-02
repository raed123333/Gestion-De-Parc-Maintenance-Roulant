// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const DashboradDriver = () => {
  
    const[message,setMessage] =useState();
        const navigate=useNavigate()
        axios.defaults.withCredentials=true;
        useEffect(()=>{
                axios.get("http://localhost:3031/dashboard")
                .then(res =>{
                        if(res.data.valid){
                                setMessage(res.data.message)
                        }else{
                                navigate('/');
                                setMessage(res.data.message)

                        }
                })
                .catch(err => console.log(err))
        },[]);
        return (
                <div>Dashboard{message}</div>
        )
}
 

export default DashboradDriver

