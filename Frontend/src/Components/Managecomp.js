import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Managecomp() 
{
    const[complist,setCompList]=useState([]); 
    const[summary,setSummary]=useState('');
   const [selectedComplaintId, setSelectedComplaintId] = useState(null);
   const[isButtonVisible,setIsButtonVisible]=useState(true);           //To Show button initialy
   const [show, setShow] = useState(false);

 useEffect(()=>{
    Getallcomp();
 },[])   

function Getallcomp()           /* To display all Complaints --> Manage Complaints*/
{
  axios
  .get("http://localhost:8080/Getallcomp")
  .then((res)=>{
    setCompList(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

function AddSummary()
{
  if(summary==="")
  {
    toast.error("Please enter Summary...");
    return;
  }
  const obj={complaintid: selectedComplaintId, summary};
  axios
  .post("http://localhost:8080/AddSummary",obj)
  .then((res)=>{
    toast.success(res.data);
    Getallcomp();
   setIsButtonVisible(false);   //To Hide the Give Summary button
    handleClose();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

const handleClose = () => {
    setShow(false);
    setSummary(''); // Clear summary input
  };
  
  const handleShow = (complaintId) => {
    setSelectedComplaintId(complaintId);
    setShow(true);
  };


  return (
    <>

    <div className='managecompcard'>
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
      <th>Status</th>
      <th>Summary</th>
    </tr>
    </thead>
    <tbody>
      {
        complist.map((item, index) => (
          <tr key={index}>
        <td>{item.complaintid}</td>
        <td>{item.victimsname}</td>
        <td>{item.student.studentid}</td>
        <td>{item.complaintcategory}</td>
        <td>{item.student.branch3.branchname}</td>
        <td>{item.student.semester}</td>
        <td>{item.student.course3.coursename}</td>
        <td>{item.student.college2.collegename}</td>
        <td>{item.status}</td>
        <td>{item.summary}</td>
        <td> 
          {item.status !== 'Solved' && isButtonVisible &&(
          <button className='btn btn-primary' onClick={()=>handleShow(item.complaintid)}>Give Summary</button>
        )}
        </td>
        </tr>
          ))
      }
    </tbody>
    </table>
    </div>

    <Modal show={show} onHide={handleClose} animation={false}>

<Modal.Header closeButton>
  <Modal.Title>Add Summary</Modal.Title>
</Modal.Header>

<Modal.Body>
<textarea type="textarea" className='form-control' value={summary} onChange={(e)=>setSummary(e.target.value)}   style={{ width: "90%", height: "150px" }}/>
</Modal.Body>

<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>

  <Button variant="primary" onClick={AddSummary}>
   Submit
  </Button>

</Modal.Footer>
</Modal>


    </>
  )
}
