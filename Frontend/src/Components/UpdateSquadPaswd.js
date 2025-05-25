import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function UpdateSquadPaswd()
 {
    const usrid=sessionStorage.getItem('userid'); //Session Storage of Getting an item of Squadid
    const[password,setPassword]=useState('');

    useEffect(()=>{
        getsquadpswd();
    },[])

    function editpswdsquad()          /* update Squads Password */
{
  if(password==="")
    {
      toast.error("please enter password");
      return;
    }
  const obj={password};
  axios
  .put(`http://localhost:8080/editpswdsquad/${usrid}`,obj)
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

function getsquadpswd()  /* For updating SquadPassword we want password - UpdateSquadPaswd */
{
    axios
        .get(`http://localhost:8080/getsquadpswd/${usrid}`)
        .then((res)=>{
            setPassword(res.data.password);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
}

  return (
    <>
  
<Card className='squadpswdcard' >
<h3 style={{color:"green",fontFamily:"monospace",textAlign:"center",fontWeight:"bold"}}>Update Password</h3> 
<label className='form-label'>Enter Password:</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>
<div className='btndiv'>
<button type="button" className='btn btn-primary me-4' onClick={editpswdsquad} style={{marginLeft:"400px",marginTop:"10px"}}>Edit Password</button>
</div>
</Card>
    </>
  )
}
