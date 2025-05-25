import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function Updatestudpaswd()
 {
  const[password,setPassword]=useState('');
  const urid=sessionStorage.getItem('userid');  //session storage getting of studentid

  useEffect(()=>{
    getstudpaswd();
  },[])

  function clearAll()
{
  setPassword("");
}
  function editpswdstudent()          /* Update Student Password */
{
  if(password==="")
    {
      toast.error("please enter password");
      return;
    }
  const obj={password};
  axios
  .put(`http://localhost:8080/editpswdstudent/${urid}`,obj)
  .then((res)=>{
    toast.success(res.data);
    clearAll();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

function getstudpaswd()  /* For updating student password we want student paswd details - Updatestudpaswd */
{
  axios
  .get(`http://localhost:8080/getstudpaswd/${urid}`)
  .then((res)=>{
      setPassword(res.data.password);
  })
  .catch((err)=>{
      toast.error(err.response.data);
  });
}

  return (
    <>

<Card className='updatestupswdcard'>
  <h3 style={{color:"violet",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Update Password</h3> 

<label className='form-label'>Enter Password:</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>
<div className='btndiv'>
<button type="button" className='btn btn-primary me-4' onClick={editpswdstudent} style={{marginLeft:"400px",marginTop:"10px"}}>Edit Password</button>
</div>
</Card>
</>
  )
}
