import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();
    const {id} = useParams();

    const [user, setUser] = useState({
        name:"",
        email:"",
        username:""
    })
    const{name, username, email} = user;

    const onInputChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 rounded p-4 mt-2">
                    <div className="card">
                        <div className="card-header">
                            Edit User
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e)=>onSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"
                                    value={name} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User Name</label>
                                    <input type="text" name='username' className="form-control" id="username" aria-describedby="emailHelp" placeholder="username" value={username} onChange={(e)=>onInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>onInputChange(e)}/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Update</button>
                                <Link to={"/"} className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
