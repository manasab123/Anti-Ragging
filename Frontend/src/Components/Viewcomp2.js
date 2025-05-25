import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Viewcomp2() 
{
  const urid=sessionStorage.getItem('userid');  //session storage getting of studentid
  const [complaintsList, setComplaintsList] = useState([]); // To store the list of complaints

  useEffect(()=>{
    Getcomplaints();
  },[])

  function Getcomplaints()     /* View Complaints */
{
  axios
  .get(`http://localhost:8080/Getcomplaints/${urid}`)
  .then((res)=>{
    setComplaintsList(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

function Solvedstatus(complaintid)  
{
  axios
  .put(`http://localhost:8080/Solvedstatus/${complaintid}`)
  .then((res)=>{
    toast.success(res.data);
    Getcomplaints();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

  return (
    <>
<div className='viewcomp2card'>
   <h3 style={{ color: 'violet', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>Complaints List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Complaint id</th>
      <th>Victim's Name</th>
      <th>Complaint Category</th>
      <th>Student id</th>
      <th>Accused Person</th>
      <th>Status</th>
      <th>Summary</th>
      <th>Actions</th> 
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
        <td>{item.accusedperson}</td>
        <td>{item.status}</td>
        <th>{item.summary}</th>
        <td>
                  {/* Show "Solved" button only if the complaint status is not "Solved" */}
                  {item.status !== 'Solved' ? (
                    <Button
                      className="btn btn-primary"
                      onClick={() => Solvedstatus(item.complaintid)}
                    >
                      Solved
                    </Button>
                  ):(
                    <img src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=" alt="tick" width="50px"/>
                  )}
                </td>
                </tr>
            ))}
    </tbody>
    </table>
    </div>
</>
  )
}
