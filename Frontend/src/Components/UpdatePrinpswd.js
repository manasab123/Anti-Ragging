import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';

export default function UpdatePrinpswd()
 {
    const[password,setPassword]=useState('');
    const usrid=sessionStorage.getItem('userid'); //Session Storage of Getting an item of Principalid

    useEffect(()=>{
      getprincipswd();
    },[])

function editpassword()          /* update Principal Password */
{
  if(password==="")
    {
      toast.error("please enter password");
      return;
    }
  const obj={password};
  axios
  .put(`http://localhost:8080/editpassword/${usrid}`,obj)
  .then((res)=>{
    toast.success(res.data);
    clearAll();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

function clearAll()
{
    setPassword("");
}

function getprincipswd()  /* For updating we want */
{
  axios
      .get(`http://localhost:8080/getprincipswd/${usrid}`)
      .then((res)=>{
          setPassword(res.data.password);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
}

  return (
    <><br></br>
     <Card className='prinpswdcard'>
  <h3 style={{color:"blue",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Update Password</h3> 
<label className='form-label'>Enter Password:</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'/><br></br>
<div className='btns'>
<button type="button" className='btn btn-primary' onClick={editpassword}>Edit Password</button>
</div>
</Card>
  </>
  )
}
