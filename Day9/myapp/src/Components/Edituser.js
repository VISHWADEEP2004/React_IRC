import React, { useEffect, useState } from "react";
import '../assets/Css/core.css'
import { useNavigate, useParams } from "react-router-dom";
import { edituser, getuserId } from "../Services/api";
export default function Edituser() {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const fetchData = async () => {
        try {
            const res = await getuserId(id)
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res1 = await edituser(id,data)
            console.log(res1.status)
            if(res1.status==200){
                alert('userupdated')
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(data)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text'value={data.username} id='username' placeholder="username" onChange={handleChange} />
                <input type='text' value={data.password}id='password' placeholder="password" onChange={handleChange} />
                <button type="Submit">Add</button>
            </form>
        </>
    )
}