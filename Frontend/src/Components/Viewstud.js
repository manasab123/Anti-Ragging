import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import { useState } from 'react';


export default function Viewstud()
 {
  const[studentlist,setStudentlist]=useState([]);  //To display Studentlist    (View Students)
  const collegeid=sessionStorage.getItem('colid');  //Session Stroage of Getting an item of Collegeid
  
  useEffect(()=>{
    Getstudentdetails();
  })

  function Getstudentdetails()        /*  View Students */
{
  axios
  .get(`http://localhost:8080/Getstudentdetails/${collegeid}`)
  .then((res)=>{
    setStudentlist(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

  return (
    <>
    
   <Card className='viewstudcard' style={{ marginTop: '20px', marginLeft: '20px' }}>
   <h3 style={{ color: 'blue', fontFamily: 'monospace',fontWeight:"bold"}}>Student List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Student id</th>
      <th>Student Name</th>
      <th>College Name</th>
      <th>Course Name</th>
      <th>Branch Name</th>
      <th>Semester</th>
      <th>Mobileno</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      {
        studentlist.map((item, index) => (
          <tr key={index}>
        <td>{item.studentid}</td>
        <td>{item.studentname}</td>
        <td>{item.college2.collegename}</td>
        <td>{item.course3.coursename}</td>
        <td>{item.branch3.branchname}</td>
        <td>{item.semester}</td>
        <td>{item.mobileno}</td>
        <td>{item.status}</td>
          </tr>
          ))
      }
    </tbody>
    </table>
    </Card>
</>
  )
}
