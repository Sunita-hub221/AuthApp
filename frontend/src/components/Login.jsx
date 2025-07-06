import React, { useState } from 'react'
import Input from './Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/login`, {
                email,
                password
            })
            console.log(response.data);
            if (response.data.success == true) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                navigate('/home');
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            <Input type={"email"} inputValue={email} placeholder={"Email Address"} setInputValue={setEmail} labelName={"Email"} />
            <Input type={"password"} inputValue={password} placeholder={"Password"} setInputValue={setPassword} labelName={"Password"} />
            <button className=' border border-black p-3 hover:bg-black hover:scale-95 hover:text-white  duration-200' onClick={(e) => { loginHandler(e) }}>Login</button>
        </div>
    )
}

export default Login