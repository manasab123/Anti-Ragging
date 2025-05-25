import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function ViewFeedback() 
{
  const[feedbacklist,setFeedbacklist]=useState([]);    //To display Feedback list
  const collegeid=sessionStorage.getItem('colid');  //Session Stroage of Getting an item of Collegeid

  useEffect(()=>{
    Getfeedback();
  })

  function Getfeedback()        /*  View Feedback  */
{
    axios
    .get(`http://localhost:8080/Getfeedback/${collegeid}`)
    .then((res)=>{
      setFeedbacklist(res.data);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
}


  return (
    <>
   

   <Card className='viewfeedbackcard' style={{ marginTop: '20px', marginLeft: '20px' }}>
    <h3 style={{ color: 'blue', fontFamily: 'monospace',fontWeight:"bold"}}>Feedback List</h3>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Feedback ID</th>
          <th>Feedback</th>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Semester</th>
          <th>Branch Name</th>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {
          feedbacklist.map((item, index) => (
            <tr key={index}>
              <td>{item.feedbackid}</td>
              <td>{item.feedback}</td>
              <td>{item.student.studentid}</td>
              <td>{item.student.studentname}</td>
              <td>{item.student.semester}</td>
              <td>{item.student.branch3.branchname}</td>
              <td>{item.student.course3.coursename}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </Card>
</>
  )
}
