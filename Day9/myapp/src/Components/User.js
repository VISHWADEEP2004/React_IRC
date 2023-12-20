import React, { useEffect, useState } from "react";
import { getuser, deleteuser } from "../Services/api";
import { useNavigate } from "react-router-dom";
export default function User() {
    const navigate =useNavigate();
    const [user, setUser] = useState([]);
    const fetchData = async () => {
        try {
            const res = await getuser()
            console.log(res.data)
            setUser(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleDelete = async (id) => {
        try {
            const res = await deleteuser(id)
            if (res.status === 200) {
                alert('delete')
            }
            fetchData()
        }
        catch (e) {
            console.log(e)
        }

    }
    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }
    console.log(user)
    const handleAdd=()=>{
        navigate('/add')
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            useername
                        </th>
                        <th>
                            password
                        </th>
                        <th>
                            edit
                        </th>
                        <th>
                            delete
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td><button className="edt-btn" onClick={()=>handleEdit(user.id)}>Edit</button></td>
                            <td><button className="del-button" onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
            <button onClick={handleAdd}>Add User</button>
        </>
    )
}