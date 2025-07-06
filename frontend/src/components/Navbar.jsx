import React, { useEffect, useState } from 'react'
import Landing from '../pages/LandingPage';

function Navbar({ buttonClicked, setButtonClicked }) {


    useEffect(() => {
        console.log(buttonClicked);
    }, [buttonClicked])

    return (
        <div className='w-full h-14 bg-black flex justify-between items-center'>
            <div className='flex'>
                <ul className='flex text-white gap-2'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex gap-2 mr-3'>
                <button className='bg-yellow-500 text-white p-2 rounded hover:scale-95 duration-200' onClick={() => { setButtonClicked("Login") }}>Login</button>
                <button className='bg-red-500 text-white p-2 rounded hover:scale-95 duration-200' onClick={() => { setButtonClicked("Signup") }}>SignUp</button>
            </div>
        </div>
    )
}

export default Navbar