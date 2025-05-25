import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Viewcomp()
 {
  const[complaintsList,setComplaintsList]=useState([]); //To display comlaint list
  const collegeid=sessionStorage.getItem('colid');  //Session Stroage of Getting an item of Collegeid

  useEffect(()=>{
    Getcomp();
  },[])

  function Getcomp()          /*   View Complaints */
{
  axios
  .get(`http://localhost:8080/Getcomp/${collegeid}`)
  .then((res)=>{
    setComplaintsList(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

  return (
    <>
<br></br>
    <Card className='viewcompcard' >
   <h3 style={{ color: 'blue', fontFamily: 'monospace',fontWeight:"bold",textAlign:"Center"}}>Complaints List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Complaint id</th>
      <th>Victim's Name</th>
      <th>Complaint Category</th>
      <th>Student id</th>
      <th>Semester</th>
      <th>Branch Name</th>
      <th>Course Name</th>
      <th>Accused Person</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      {
        complaintsList.map((item, index) => (
        <tr key={index}>
        <td>{item.complaintid}</td>
        <td>{item.victimsname}</td>
        <td>{item.complaintcategory}</td>
        <td>{item.student.studentid}</td>
        <td>{item.student.semester}</td>
        <td>{item.student.branch3.branchname}</td>
        <td>{item.student.course3.coursename}</td>
        <td>{item.accusedperson}</td>
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
