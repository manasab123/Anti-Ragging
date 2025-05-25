import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';

export default function Viewstudents() 
{
    const[studentslist,setStudentlist]=useState([]);   //To display Student list

    useEffect(()=>{
        Getallstudentdetails();
    },[])


    function Getallstudentdetails()           /* To display all Students */
{
  axios
  .get("http://localhost:8080/Getallstudentdetails")
  .then((res)=>{
    setStudentlist(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


  return (
  <>
   
  <Card className='studentscard' style={{ marginTop: '20px', marginLeft: '20px' }}>
   <h3 style={{ color: 'orange', fontFamily: 'monospace',fontWeight:"bold" }}>Students List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Student id</th>
      <th>Student Name</th>
      <th>Gender</th>
      <th>Branch Name</th>
      <th>Semester</th>
      <th>Course Name</th>
      <th>College Name</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      {
        studentslist.map((item, index) => (
          <tr key={index}>
        <td>{item.studentid}</td>
        <td>{item.studentname}</td>
        <td>{item.gender}</td>
        <td>{item.branch3.branchname}</td>
        <td>{item.semester}</td>
        <td>{item.course3.coursename}</td>
        <td>{item.college2.collegename}</td>
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
