import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const[id, setId]=useState(0);
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const naviUpdate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    },[]);

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://644fb476b61a9f0c4d291c76.mockapi.io/crud-lightmode/${id}`,{
            name:name,
            email:email
        }).then(()=>{
            naviUpdate('/read')
        })
    }
  return (
    <>
        <h3>Update</h3>
        <form>
  <div className="mb-3">
    <label  
    className="form-label">
    Name
    </label>
    <input 
    type="text" 
    className="form-control"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label 
    className="form-label">
    Email address
    </label>
    <input 
    type="email" 
    className="form-control"
    value={email} 
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
  <Link to='/read'><button className='btn btn-secondary mx-2'>Back</button></Link>
</form>
    </>
  )
}

export default Update;