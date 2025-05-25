import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function UpdateSquadProfile() 
{
    const usrid=sessionStorage.getItem('userid'); //Session Storage of Getting an item of Squadid
    const[squadname,setSquadname]=useState('');
    const[mobileno,setMobileno]=useState('');
    const[qualification,setQualification]=useState('');
   
    useEffect(()=>{
        getsquadprof();
    },[])

    function editprofsquad()                     /* Update Squads Profile */
{
  if(squadname==="")
    {
      toast.error("please enter squadname");
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
  const obj={squadname,mobileno,qualification};
  axios
  .put(`http://localhost:8080/editprofsquad/${usrid}`,obj)
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
  setMobileno('');
  setQualification('');
  setSquadname('');
}

function getsquadprof()   /* for updating SquadProfile we want details of squad - UpdateSquadProfile */
{
  axios
      .get(`http://localhost:8080/getsquadprof/${usrid}`)
      .then((res)=>{
          setMobileno(res.data.mobileno);
          setQualification(res.data.qualification);
          setSquadname(res.data.squadname);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
}


  return (
    <>

<Card className='squaprofilecard' >
<h3 style={{color:"green",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Update Profile</h3> 
<label className='form-label'>Enter Squad Name:</label>
<input type="text" value={squadname} onChange={(e)=>setSquadname(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Mobileno:</label>
<input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Qualification:</label>
<input type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<div className='btndiv'>
<button type="button" className='btn btn-primary me-4' onClick={editprofsquad} style={{marginLeft:"400px",marginTop:"10px"}}>Edit Profile</button>
</div>
</Card>
    </>
  )
}
