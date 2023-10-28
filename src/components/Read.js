import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const[datas, setDatas]=useState([]);
  const[tabledark, setTableDark]=useState('')

  function getData() {
    axios.get('https://644fb476b61a9f0c4d291c76.mockapi.io/crud-lightmode')
    .then((res)=>{
      console.log(res.data);
      setDatas(res.data)
    })
  }
// Delete function
  const handleDelete=(id)=>{
      axios.delete(`https://644fb476b61a9f0c4d291c76.mockapi.io/crud-lightmode/${id}`)
      .then(()=>{
        getData()
      })
  }
// Edit Locasstorage
  const EditLocalStorage=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <>
    {/* light and darkmode */}
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>{
    if(tabledark === 'table-dark') setTableDark('')
    else setTableDark('table-dark')
  }}/>
  {/* light and darkmode */}
</div>

    <h3>Read Operation</h3>
      <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  { 
    datas.map((item,i)=>{
      return(
    <tbody key={item.id}>
    <tr >
      <th>{i+1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      
      <td>
      <Link to='/update'>
      <button className='btn btn-danger' onClick={()=> EditLocalStorage(item.id,item.name,item.email)}>Edit</button>
      </Link>
      </td>
      
      <td><button className='btn btn-success' onClick={()=> handleDelete(item.id)}>Delete</button></td>
    </tr>
  </tbody>
        
      ) 
    })
    
    }
</table>
<Link to='/'><button className='btn btn-secondary'>Create</button></Link>
    </>
  )
}

export default Read;