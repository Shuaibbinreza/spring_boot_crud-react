import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        username:""
    });
    const {id} = useParams(); 

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
        console.log(user);
    }

    useEffect(()=>{
        loadUser()
    }, []);
  return (
    <div>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <h1>User name: {user.username}</h1>
    </div>
  )
}
