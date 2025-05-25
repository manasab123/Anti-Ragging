import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Updatestudprofile() 
{
  const[semester,setSemester]=useState('');
  const[mobileno,setMobileno]=useState('');
  const[studentname,setStudentname]=useState('');
  const urid=sessionStorage.getItem('userid');  //session storage getting of studentid

  useEffect(()=>{
    getstudprof();
  },[])

  function editprofstudent()          /* Update Student Profile */
  {
    if(studentname==="")
      {
        toast.error("please enter studentname");
        return;
      }
      if(mobileno==="")
        {
          toast.error("please enter mobileno");
          return;
        }
        if(semester==="")
          {
            toast.error("please enter semester");
            return;
          }
    const obj={studentname,mobileno,semester};
    axios
    .put(`http://localhost:8080/editprofstudent/${urid}`,obj)
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
    setSemester('');
    setStudentname('');
}

function getstudprof()   /* For updating student Profile  we want student profiledetails - Updatestudprofile */
{
  axios
  .get(`http://localhost:8080/getstudprof/${urid}`)
  .then((res)=>{
      setSemester(res.data.semester);
      setStudentname(res.data.studentname);
      setMobileno(res.data.mobileno);
  })
  .catch((err)=>{
      toast.error(err.response.data);
  });
}

  return (
    <>

  <Card className='updatestudprofcard'>
   <h3 style={{color:"violet",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Update Profile</h3> 

<label className='form-label'>Enter Student Name:</label>
<input type="text" value={studentname} onChange={(e)=>setStudentname(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Mobileno:</label>
<input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<label className='form-label'>Enter Semester:</label>
<input type="text" value={semester} onChange={(e)=>setSemester(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

<div className='btndiv'>
<button type="button" className='btn btn-primary me-4' onClick={editprofstudent} style={{marginLeft:"400px",marginTop:"10px"}}>Edit Profile</button>
</div>
</Card><br></br>
 </>
  )
}
