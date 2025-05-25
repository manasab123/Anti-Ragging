import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function Postfeedback() 
{
  const urid=sessionStorage.getItem('userid');  //session storage getting of studentid
  const[feedback,setFeedback]=useState('');

  function Addfeedback()     /* post Feedback */
{
  if(feedback==="")
    {
      toast.error("please enter feedback");
      return;
    }
  const obj={feedback};
  axios
  .post(`http://localhost:8080/Addfeedback/${urid}`,obj)
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
  setFeedback("");
}

  return (
    <>

<div className='postfeedbackcard'>
<h3 style={{color:"violet",fontFamily:"monospace",textAlign:"center",fontWeight:"bold"}}>Post Feedback</h3>

<label className='form-label'>Enter Feedback:</label> <br></br>
<input type="text" value={feedback} className='form-control' onChange={(e) => setFeedback(e.target.value)} style={{marginLeft:"20px",width:"800px"}}/><br></br>

  <button type="button" className='btn btn-primary me-4' style={{marginLeft:"400px"}} onClick={Addfeedback}>Submit</button>
   </div>   
</>
  )
}
