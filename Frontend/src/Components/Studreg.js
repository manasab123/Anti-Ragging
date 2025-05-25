import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import rag1 from '../Components/rag1.jpg';
import Navbar from './Navbar';

export default function Studreg() 
{
    const[studentname,setName]=useState('');
    const[password,setPassword]=useState('');
    const[mobileno,setMobileno]=useState('');
    const[semester,setSemester]=useState('');
    const[collegelist,setCollegelist]=useState([ ]);    //Dropdown list for college names
    const[selectcollege,setSelectcollege]=useState('');
    const[courselist,setCourselist]=useState([]);        //Dropdown list for Course names
    const[selectcourse,setSelectcourse]=useState('');
    const[branchlist,setBranchlist]=useState([]);     //Dropdown list for Branch names
    const[selectbranch,setSelectbranch]=useState('');
    const[gender,setGender]=useState('');
    const[emailid,setEmailid]=useState('');

    useEffect(()=>{
        Getallcollegedetails();   //Dropdown list for College list
      },[])

          useEffect(() => {
            if (selectcollege) {
              Getcourseofcollege(); // Fetch courses when college is selected
            }
          }, [selectcollege]);

          useEffect(()=>{
            if (selectcourse) {
            getbranchoncourse();
            }
          })

          
      function Addstudentdetails()           /* Add student Details */
      {
        if(studentname==="")
        {
          toast.error("Please enter student name");
          return
        }
        if(gender==="")
          {
            toast.error("Please enter gender");
            return
          }
          if(mobileno==="")
            {
              toast.error("Please enter mobileno");
              return
            }
            if (!/^\+91\d{10}$/.test(mobileno)) {
              toast.error("Phone number should start with +91 and be followed by 10 digits");
              return;
            }
              if(semester==="")
                {
                  toast.error("Please enter student semester");
                  return
                }
                if(password==="")
                  {
                    toast.error("Please enter password");
                    return
                  }
                  if (password.length > 0 && password.length < 5) 
                    {
                      toast.error("Password should be minimum of 5 Characters");
                      return;
                    }
                    if (password.length > 0 && (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password))) 
                      {
                      toast.warning("Password should contain both letters and numbers");
                    }
                    if (!/^[A-Z]/.test(password)) {
                      toast.error("Password should start with an uppercase letter");
                      return;
                    }
                  if(studentname==="")
                    {
                      toast.error("Please enter student name");
                      return
                    }
                    if(emailid==="")
                      {
                        toast.error("Please enter emailid");
                        return;
                      }
        const obj={studentname,gender,mobileno,semester,emailid,password,selectcollege,selectcourse,selectbranch};
          axios
          .post(`http://localhost:8080/Addstudentdetails/${selectcollege}/${selectcourse}/${selectbranch}`,obj)
          .then((res)=>{
            toast.success(res.data);
            clearAll();
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

    function Getcourseofcollege()         /* Drop down list for Course Details based on collegeid */
    {
      axios
      .get(`http://localhost:8080/Getcourseofcollege/${selectcollege}`)
      .then((res)=>{
        setCourselist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function getbranchoncourse()         /* Drop down list for Branch Details based on course */
    {
      axios
      .get(`http://localhost:8080/getbranchoncourse/${selectcourse}`)
      .then((res)=>{
        setBranchlist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function clearAll()
    {
      setMobileno('');
      setGender('');
      setName('');
      setPassword('');
      setSemester('');
      setSelectcollege('');
      setSelectcourse('');
      setSelectbranch('');
      setEmailid("");
    }

  return (
    <>
<Navbar/>

<img src={rag1} alt="img1" height="1200px" width="100%"/>
   <Card className='collegedetails1'>
    <h2 style={{color:"maroon",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Register Student</h2>  
   <label className='form-label'><h6>Choose College:</h6></label>
    <select className="form-select" value={selectcollege} onChange={(e)=>setSelectcollege(e.target.value)} style={{ width: '600px',marginLeft:"25px"}}>
    <option value={0}>--Select College--</option>
    {
      collegelist.map((item,index)=>(
        <option key={index} value={item.collegeid}>{item.collegeid}-{item.collegename}</option>
      ))
    }
    </select><br></br>

    <label className='form-label'><h6>Choose Course:</h6></label>
    <select className="form-select" value={selectcourse} onChange={(e)=>setSelectcourse(e.target.value)} style={{ width: '600px',marginLeft:"25px"}}>
      <option value={0}>--Select Course--</option>
      { 
          courselist.map((item,index)=>(
            <option key={index} value={item.courseid}>{item.courseid}-{item.coursename}</option>
          ))
      }
    </select><br></br>


    <label className='form-label'><h6>Choose Branch:</h6></label>
    <select className="form-select" value={selectbranch} onChange={(e)=>setSelectbranch(e.target.value)} style={{ width: '600px',marginLeft:"25px"}}>
    <option value={0}>--Select Branch--</option>
    {
      branchlist.map((item,index)=>(
        <option key={index} value={item.branchid}>{item.branchid}-{item.branchname}</option>
      ))
    }
    </select><br></br>
   
   <label className='form-label'><h6>Enter Student Name:</h6></label>
   <input type="text" value={studentname} onChange={(e)=>setName(e.target.value)} className='form-control' style={{ width: '600px'}}/><br></br>

   <label className="form-label"><h6>Select Gender:</h6></label>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '10px'}}>
            <label className='form-label'><input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)}/>
              Male
            </label>
            <label className='form-label'><input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)}/>
              Female
            </label>
          </div>

      <label className='form-label'><h6>Enter Mobileno:</h6></label>
   <input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' style={{ width: '600px'}} placeholder='+91'/><br></br>
      
    <label><h6>Enter Semester:</h6></label>
    <input type="text" value={semester} onChange={(e)=>setSemester(e.target.value)} className='form-control' style={{ width: '600px'}}/><br></br>

    <label className='form-label'><h6>Enter Emailid:</h6></label>
    <input type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} className='form-control' style={{ width: '600px'}} placeholder='@gmail.com'/><br></br>

      <label className='form-label'><h6>Enter Password:</h6></label>
   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' style={{ width: '600px'}} placeholder='*****'/><br></br>
   <div className='btndiv'>
      <button type="button" className='btn btn-primary me-4' onClick={Addstudentdetails} style={{marginLeft:"200px",marginTop:"20px"}}>Submit</button>
      <button className='btn btn-secondary me-4' style={{marginLeft:"20px",marginTop:"20px"}}>Cancel</button>
      </div>
      <br></br>
    </Card>
    </>
  )
}
