import axios from 'axios';
import React, { useEffect } from 'react'

const HomePage = () => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        async function getUserDetails() {
            const response = await axios.get(`http://localhost:3000/api/v1/getUserDetail`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
        }
        getUserDetails();
    }, [])

    return (
        <div>HomePage</div>
    )
}

export default HomePage