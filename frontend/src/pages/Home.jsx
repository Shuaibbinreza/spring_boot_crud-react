import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        console.log("Checking Use Effect");
        loadUsers();
    }, []);
    
    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const {id}=useParams();

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >Name</th>
                            <th >User Name</th>
                            <th >Email</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index)=>(
                            <tr key={index}>
                                <td key={index}>
                                    {index+1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
                                        View
                                    </Link>
                                    <Link className="btn btn-success mx-2" to={`/edituser/${user.id}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
