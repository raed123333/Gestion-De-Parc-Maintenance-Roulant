// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
                const [email,setEmail] = useState("");
                const [password,setPassword] = useState("");
                const navigate = useNavigate();
                
        axios.defaults.withCredentials=true;        
        const handleSubmit = (e) => {
                e.preventDefault();
                axios.post('http://localhost:5555/driver/login',{email,password})
                .then(res =>{
                        if(res.data.Login){
                                navigate('/dashboardDriver');
                                console.log("go to dashboard");
                                
                        }else{
                                navigate('/');
                                console.log("go to home");
                        }
                        console.log(res.data)
                    

                })
                .catch((err) => console.log(err));


        };
        return (
                <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} >
                        
                        <div className='mb-3'>
                                <label htmlFor="email">
                                        <strong>email</strong>
                                </label>
                                <input type="email" 
                                placeholder='enter your Email ........'
                                autoComplete='off'
                                name='email'
                                className='form-control rounded-0' 
                                onChange={(e)=>setEmail(e.target.value)}/>
                                
                        </div>
                        <div className='mb-3'>
                                <label htmlFor="password">
                                        <strong>password</strong>
                                </label>
                                <input type="password"
                                placeholder='enter your password..........'
                                autoComplete='off'
                                name='password'
                                className='form-control rounded-0' 
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                                
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0'>
                                Login
                        </button>
                </form>
                <p>
                        ont have account ? 
                </p>
                <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Register
                </button>

        </div>

    </div>
        )
}

export default Login