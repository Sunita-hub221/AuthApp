import React, { useEffect } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';

const Landing = ({ buttonClicked, setButtonClicked }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate('/home');
        }
    }, [])
    return (
        <div className='text-black'>
            {
                buttonClicked == "Login" ? <Login /> : buttonClicked == "Signup" ? <Signup /> :
                    <>EmptyPage</>
            }
        </div>
    )
}

export default Landing