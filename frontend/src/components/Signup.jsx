import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [formStatus, setFormStatus] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [otp, setOtp] = useState(0);
    async function clickHandler(e) {
        try {
            e.preventDefault();
            const response = await axios.post(`http://localhost:3000/api/v1/sendOtp`, {
                email
            });
            console.log(response.data);
            if (response.data.success == true) {
                setFormStatus(true);
            }
        }
        catch (e) {
            console.log(e.message);
        }


    }

    async function createUserHandler(e) {
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/api/v1/signup`, {
            firstName, lastName, middleName, email, role, password, otp
        })
        console.log(response.data);
    }
    return (
        <div>
            {
                formStatus ? <form>
                    <Input type={"firstName"} placeholder={"First Name"} inputValue={firstName} setInputValue={setFirstName} labelName={"Email"} />
                    <Input type={"middleName"} placeholder={"Middle Name"} inputValue={middleName} setInputValue={setMiddleName} labelName={"Middle Name"} />
                    <Input type={"lastName"} placeholder={"Last Name"} inputValue={lastName} setInputValue={setLastName} labelName={"Last Name"} />
                    <Input type={"email"} placeholder={"email"} inputValue={email} setInputValue={setEmail} labelName={"Email"} />
                    <Input type={"password"} placeholder={"password"} inputValue={password} setInputValue={setPassword} labelName={"Password"} />
                    <Input type={"role"} placeholder={"role"} inputValue={role} setInputValue={setRole} labelName={"role"} />
                    <Input type={"otp"} placeholder={"otp"} inputValue={otp} setInputValue={setOtp} labelName={"otp"} />
                    <button onClick={(e) => createUserHandler(e)}>Create User</button>
                </form> : <form>
                    <Input type={"email"} placeholder={"Email Address"} inputValue={email} setInputValue={setEmail} labelName={"Email"} />
                    <button onClick={(e) => clickHandler(e)}>Submit</button>
                </form>
            }

        </div>
    )
}

export default Signup