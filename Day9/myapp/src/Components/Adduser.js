import React, { useState } from "react";
import { adduser } from "../Services/api";
import '../assets/Css/core.css'
import{useNavigate} from 'react-router-dom'
export default function Adduser() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await adduser(data)
            if (res.status == 201) {
                alert('useradded')
                navigate('/')
            }
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' id='username' placeholder="username" onChange={handleChange} />
                <input type='text' id='password' placeholder="password" onChange={handleChange} />
                <button type="Submit">Add</button>
            </form>
        </>
    )
}