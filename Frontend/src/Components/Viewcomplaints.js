import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';

export default function Viewcomplaints()
 {
    const[complaintsList,setComplaintsList]=useState([]);  //To display the complaint list

    useEffect(()=>{
        Getallcomplaints();
    },[])

function Getallcomplaints()           /* To display all Complaints */
{
  axios
  .get("http://localhost:8080/Getallcomplaints")
  .then((res)=>{
    setComplaintsList(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


  return (
  <>

  <Card className='complaintscard' style={{ marginTop: '20px', marginLeft: '20px' }}>
   <h2 style={{ color: 'orange', fontFamily: 'monospace',fontWeight:"bold",marginLeft:"500px"}}>Complaints List</h2>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Complaint id</th>
      <th>Victim's Name</th>
      <th>Student id</th>
      <th>Complaint Category</th>
      <th>Branch Name</th>
      <th>Semester</th>
      <th>Course Name</th>
      <th>College Name</th>
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
        <td>{item.student.studentid}</td>
        <td>{item.complaintcategory}</td>
        <td>{item.student.branch3.branchname}</td>
        <td>{item.student.semester}</td>
        <td>{item.student.course3.coursename}</td>
        <td>{item.student.college2.collegename}</td>
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
