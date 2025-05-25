import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Viewcomp1() 
{
  const[complaintsList,setComplaintsList]=useState([]);               //To display the complaints list -View Complaints
  const squadid=sessionStorage.getItem('userid');

  useEffect(()=>{
    Getallcomplaints();
  })

  function Getallcomplaints()           /* To display all Complaints --> View Complaints*/
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

function acceptbysquad(complaintid)    /* Update by accepting complaint by squads */
{
  axios
  .put(`http://localhost:8080/acceptbysquad/${complaintid}/${squadid}`)
  .then((res)=>{
    toast.success(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

  return (
    <>
  <br></br>
  <Card className='comp1card' >
   <h3 style={{ color: 'green', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>Complaints List</h3>
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
        <td><Button className='btn btn-primary' onClick={()=>acceptbysquad(item.complaintid)}>Accept</Button></td>
          </tr>
          ))
      }
    </tbody>
    </table>
    </Card>
  </>
  )
}
