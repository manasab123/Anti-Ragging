import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';

export default function Viewstud1() 
{
    const[studentlist,setStudentlist]=useState([]);

    useEffect(()=>{
        Getallstudentdetails();
    },[])

    function Getallstudentdetails()   /*  Display all Students details */ 
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
    <><br></br>
  <Card className='comp1card'>
   <h3 style={{ color: 'green', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>Student List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Student id</th>
      <th>Student Name</th>
      <th>Gender</th>
      <th>Semester</th>
      <th>Mobileno</th>
      <th>Branch Name</th>
      <th>Course Name</th>
      <th>College Name</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      {
        studentlist.map((item, index) => (
          <tr key={index}>
        <td>{item.studentid}</td>
        <td>{item.studentname}</td>
        <td>{item.gender}</td>
        <td>{item.semester}</td>
        <td>{item.mobileno}</td>
        <td>{item.branch3?.branchname}</td>
        <td>{item.course3?.coursename}</td>
        <td>{item.college2?.collegename}</td>
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
