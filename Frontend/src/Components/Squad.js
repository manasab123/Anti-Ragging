import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import squad from '../Components/squad.jpg';

export default function Squad() 
{
    const[squadname,setSquadname]=useState('');
    const[mobileno,setMobileno]=useState('');
    const[qualification,setQualification]=useState('');
    const[emailid,setEmailid]=useState('');

    function Addsquadsdetails()           /* Add Squad Details */
{
  if(squadname==="")
    {
      toast.error("please enter squadname");
      return;
    }
    if (!/^\+91\d{10}$/.test(mobileno)) {
      toast.error("Mobile number should start with +91 and be followed by 10 digits");
      return;
    }
      if(qualification==="")
        {
          toast.error("please enter qualification");
          return;
        }
        if(emailid==='')
        {
          toast.error("Please enter emailid");
          return;
        }
const obj={squadname,mobileno,qualification,emailid};
  axios
  .post("http://localhost:8080/Addsquadsdetails",obj)
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
  setSquadname('');
  setQualification('');
  setEmailid("");
}

  return (
    <>

 <img src={squad} alt="primg" width="1350px"/>

 <Card className='squdcard'>
 <h3 style={{color:"orange",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Register Squad</h3> 

<label className='form-label'>Enter Squad Name:</label>
<input type="text" value={squadname} onChange={(e)=>setSquadname(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Mobileno:</label>
<input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' style={{ width: '800px'}} placeholder='+91'/><br></br>

<label className='form-label'>Enter Qualification:</label>
<input type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Emailid:</label>
<input type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} className='form-control' style={{ width: '800px'}} placeholder='example@gmail.com'/><br></br>

<div className='btndiv'>
   <button type="button" className='btn btn-primary me-4' onClick={Addsquadsdetails} style={{marginLeft:"400px",marginTop:"20px"}}>Submit</button>
   </div>
 </Card>
 </>
  )
}
