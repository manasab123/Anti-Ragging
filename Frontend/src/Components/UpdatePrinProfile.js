import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

export default function UpdatePrinProfile()
 {
  
const[principalname,setPrincipalname]=useState('');
const[mobileno,setMobileno]=useState('');
const[qualification,setQualification]=useState('');
const usrid=sessionStorage.getItem('userid'); //Session Storage of Getting an item of Principalid

useEffect(()=>{
  getPrinciprofile();
},[])

  function editprofile()                     /* Update Principal Profile */
{
  if(principalname==="")
    {
      toast.error("please enter principalname");
      return;
    }
    if(mobileno==="")
      {
        toast.error("please enter mobileno");
        return;
      }
      if(qualification==="")
        {
          toast.error("please enter qualification");
          return;
        }
  const obj={principalname,mobileno,qualification};
  axios
  .put(`http://localhost:8080/editprofile/${usrid}`,obj)
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
  setPrincipalname('');
  setMobileno('');
  setQualification('');
}


function getPrinciprofile()  /* For Updating we want */
{
  axios
      .get(`http://localhost:8080/getPrinciprofile/${usrid}`)
      .then((res)=>{
          setPrincipalname(res.data.principalname);
          setMobileno(res.data.mobileno);
          setQualification(res.data.qualification);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
}

  return (
    <>
<br></br>
<Card className='princprofcard'>
<h3 style={{color:"blue",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Update Profile</h3> 
<label className='form-label'>Enter Pricipal Name:</label>
<input type="text" value={principalname} onChange={(e)=>setPrincipalname(e.target.value)} className='form-control' /><br></br>

<label className='form-label'>Enter Mobileno:</label>
<input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' /><br></br>

<label className='form-label'>Enter Qualification:</label>
<input type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)} className='form-control' /><br></br>

<div className='btns'>
<button type="button" className='btn btn-primary me-4' onClick={editprofile} >Edit Profile</button>
</div>
</Card>
  </>
  )
}
