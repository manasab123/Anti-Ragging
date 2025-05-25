import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

export default function Managestudent() 
{
  const[studlist,setStudlist]=useState([]);  //To display student list (Manage Students)
  const collegeid=sessionStorage.getItem('colid');  //Session Stroage of Getting an item of Collegeid
  const [isButtonVisible, setIsButtonVisible] = useState(true);      //To Show the Block button initialy

  useEffect(()=>{
    Getallstudents();
  })

  function Getallstudents()        /*  Manage Students */
{
  axios
  .get(`http://localhost:8080/Getallstudents/${collegeid}`)
  .then((res)=>{
    setStudlist(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


function blockStudent(studentid)
{
  axios
  .put(`http://localhost:8080/blockStudent/${studentid}`)
  .then((res)=>{
    toast.success(res.data);
    setIsButtonVisible(false);   //To Hide the Block button
    Getallstudents();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


  return (
    <>

     <Card className='managestudentcard'>
   <h3 style={{ color: 'blue', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>Student List</h3>
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
        studlist.map((item, index) => (
          <tr key={index}>
        <td>{item.studentid}</td>
        <td>{item.studentname}</td>
        <td>{item.college2.collegename}</td>
        <td>{item.course3.coursename}</td>
        <td>{item.branch3.branchname}</td>
        <td>{item.semester}</td>
        <td>{item.mobileno}</td>
        <td>{item.status}</td>
        <td>
        {item.status !== 'Blocked' && isButtonVisible && (
          <button className='btn btn-danger' onClick={()=>blockStudent(item.studentid)}>Block</button>
        )}
          </td>
          </tr>
          ))
      }
    </tbody>
    </table>
    </Card>
  </>
  )
}
