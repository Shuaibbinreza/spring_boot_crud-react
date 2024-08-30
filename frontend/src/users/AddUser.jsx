import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

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

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 rounded p-4 mt-2">
                    <div className="card">
                        <div className="card-header">
                            Add User Form
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
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={"/"} className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
