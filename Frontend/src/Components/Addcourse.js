import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function Addcourse() 
{
    const[coursename,setCoursename]=useState('');
    const[courselist,setCourselist]=useState([]);                 //Display Courselist details
    const[collegelist,setCollegelist]=useState([ ]);    //Dropdown list for college names
    const[selectcollege,setSelectcollege]=useState('');
    const[hideform,setHideform]=useState(false);
    const[courseid,setCourseid]=useState('');


    useEffect(()=>{
      Getallcollegedetails();
    },[])

    function AddCoursedetails()          /* Add Course Details */
    {
      if(selectcollege==="")
      {
        toast.error("please select the college");
        return;
      }
      if(coursename==="")
        {
          toast.error("please enter course");
          return;
        }
      const obj={coursename};
        axios
        .post(`http://localhost:8080/AddCoursedetails/${selectcollege}`,obj)
        .then((res)=>{
          toast.success(res.data);
          setHideform(false);
        clearAll();
        })
        .catch((err)=>{
          toast.error(err.response.data);
        })
    }

    function Getallcoursedetails()    /* Get All Course Details */
    {      debugger;
      axios
      .get("http://localhost:8080/Getallcoursedetails")
      .then((res)=>{
        setCourselist(res.data);
        setHideform(true);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function Getallcollegedetails()           /* Drop down list for all College Details */
    {
      axios
      .get("http://localhost:8080/Getallcollegedetails")
      .then((res)=>{
        setCollegelist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function clearAll()
    {
      setSelectcollege('');
      setCoursename('');
    }

    function getcourse(courseid)  /* Assign Values */
    {
      debugger;
      axios
      .get(`http://localhost:8080/getcourse/${courseid}`)
      .then((res)=>{
        setCoursename(res.data.coursename);
        setSelectcollege(res.data.college?.collegeid );
        setCourseid(courseid);
      })
      .catch(err => toast.error(err.response?.data || "Error fetching course"));
    }
  
  
  
    function updatecourse()  /* Update Course */
      {
        debugger;
        const obj = { 
          coursename, 
          college: { collegeid: selectcollege } // Ensure proper object structure
        };
          axios
          .put(`http://localhost:8080/updatecourse/${courseid}`,obj)
          .then((res)=>{
            toast.success(res.data);
            Getallcoursedetails();
          })
          .catch((err)=>{
            toast.error(err.response.data);
          });
      }


  return (
    <>
    
    <Card className='collegedetails'>
<h3 style={{color:"green",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Add Course</h3> 
    <label className='form-label'>Choose College:</label>
    <select className="form-select" value={selectcollege} onChange={(e)=>setSelectcollege(e.target.value)} style={{ width: '800px',marginLeft:"25px"}}>
    <option value={0}>--Select College--</option>
    {
      collegelist.map((item,index)=>(
        <option key={index} value={item.collegeid}>{item.collegeid}-{item.collegename}</option>
      ))
    }
    </select>

      <label className='form-label'>Enter Course Name:</label>
      <input type='text' className='form-control' value={coursename} onChange={(e)=>setCoursename(e.target.value)} style={{ width: '800px'}}/><br></br>
     
      <div className='btnss'>
      <button type="button" className='btn btn-success me-4' onClick={Getallcoursedetails}>Show</button>

      { courseid ? 
      ( 
      <button type="button" className='btn btn-warning me-3' onClick={updatecourse}>Update</button>  
      )
      :
      (   
        <button type="button" className='btn btn-primary mb -3' onClick={AddCoursedetails}>Submit</button>
      )  
      }
 
    </div><br></br>
    </Card> 
    <br></br>

     
     {hideform && (
      <div className='displaydetails'>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Courseid</th>
          <th>Course Name</th>
          <th>College Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          courselist.map((item,index)=>(
            <tr key={index}>
              <td>{item.courseid}</td>
              <td>{item.coursename}</td>
              <td>{item?.college?.collegename}</td>
              <td><img src="https://w7.pngwing.com/pngs/766/581/png-transparent-computer-icons-editing-others.png" alt="editpic" onClick={()=>getcourse(item.courseid)} width="50px"/></td>
            </tr>
          ))
        }
      </tbody>
      </table>
      </div>
      )}
      </>
  )
}
