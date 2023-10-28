import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const history =useNavigate();

    const header = {'Access-control-Allow-origin':'*'};

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("click")
        axios.post('https://644fb476b61a9f0c4d291c76.mockapi.io/crud-lightmode',
        {name:name,
        email:email,
        header
        }).then(()=>{
            history("/read");
        })
        
    }
  return (
    <>
    <h3>Create</h3>
        <form>
  <div className="mb-3">
    <label  
    className="form-label">
    Name
    </label>
    <input 
    type="text" 
    className="form-control"
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
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  <Link to='/read'>
  <button className='btn btn-info m-3'>ShowData</button>
  </Link>
</form>

    </>
  )
}

export default Create;