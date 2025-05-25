import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Postcomplaints()
 {
    
const urid=sessionStorage.getItem('userid');  //session storage getting of studentid
const[victimsname,setVictimsname]=useState('');
const[complaintcategory,setComplaintcategory]=useState('');
const[accusedperson,setAccusedperson]=useState('');

  function Addcomplaints()     /* post Complaints */
{
  if(victimsname==="")
    {
      toast.error("please enter victimsname");
      return;
    }
    if(complaintcategory==="")
      {
        toast.error("please enter complaint category");
        return;
      }
      if(accusedperson==="")
        {
          toast.error("please enter accused person");
          return;
        }
  const obj={victimsname,complaintcategory,accusedperson};
  axios
  .post(`http://localhost:8080/Addcomplaints/${urid}`,obj)
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
    setComplaintcategory('');
    setVictimsname('');
    setAccusedperson('');
}

  return (
    <>
  <Card className='postcomplaintscard'>
<h3 style={{color:"violet",fontFamily:"monospace",textAlign:"center",fontWeight:"bold"}}>Post Complaints</h3>

<label className='form-label'>Enter Victims Name:</label> <br></br>
<input type="text" value={victimsname} className='form-control' onChange={(e) => setVictimsname(e.target.value)} style={{marginLeft:"20px",width:"800px"}}/><br></br>

<label className='form-label'>Enter Complaint Category:</label> <br></br>
<input type="text" value={complaintcategory} className='form-control' onChange={(e) => setComplaintcategory(e.target.value)} style={{marginLeft:"20px",width:"800px"}}/><br></br>

<label className='form-label'>Enter Accused Person:</label> <br></br>
<input type="text" value={accusedperson} className='form-control' onChange={(e) => setAccusedperson(e.target.value)} style={{marginLeft:"20px",width:"800px"}}/><br></br>
<div className='btndiv'>
  <button type="button" className='btn btn-primary me-4' style={{marginLeft:"400px"}} onClick={Addcomplaints}>Submit</button>
   </div>
   </Card>   <br></br>
 </>
  )
}
