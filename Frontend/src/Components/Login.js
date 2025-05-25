import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import rag2 from '../Components/rag2.jpg';
import Navbar from './Navbar';

export default function Login()
 {
  const[studblocked,setStudblocked]=useState(false);
  const[selectedusertype,setSelectedusertype]=useState('');
  const user=["Admin","Principal","Squad","Student"];
  const[password,setPassword]=useState('');
  const[emailid,setEmailid]=useState('');
  const[login,setLogin]=useState({});
  const navigate = useNavigate ();

  function Logincheck(e)         /* This API is for login check for admin */
    {
      e.preventDefault();
      if(selectedusertype==="Admin" || selectedusertype==="admin")
      {
      axios
      .get(`http://localhost:8080/adminlogin/${emailid}/${password}`)
      .then((res)=>{
        setLogin(res.data);
        navigate("/Admindashboard");
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    } 
     if(selectedusertype==="Principal" || selectedusertype==="principal")
    {
      axios
      .get(`http://localhost:8080/principallogin/${emailid}/${password}`)
      .then((res)=>{
        setLogin(res.data);
        const userid=res.data.principalid;
        sessionStorage.setItem('userid',userid);  //session storage setting of principalid
        const collegeid=res.data.college1?.collegeid;
        sessionStorage.setItem('colid',collegeid);  //session storage setting of collegeid
        toast(res.data);
        navigate("/Principaldashboard");
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }
     if(selectedusertype==="Squad" || selectedusertype==="squad")
    {
      axios
      .get(`http://localhost:8080/squadlogin/${emailid}/${password}`)
      .then((res)=>{
        setLogin(res.data);
        const userid=res.data.squadid;
        sessionStorage.setItem('userid',userid);  //session storage setting of squadid
        navigate("/Squaddashboard");
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }
     if(selectedusertype==="Student" || selectedusertype==="student")
     {
      axios
      .get(`http://localhost:8080/studentlogin/${emailid}/${password}`)
      .then((res)=>{
        if (res.data === "The student is blocked")
           {
          setStudblocked(true);
        } else {
          setStudblocked(false);
        setLogin(res.data);
        const userid=res.data.studentid;
        sessionStorage.setItem('userid',userid);  //session storage setting of studentid
        navigate("/Studentdashboard");
      }
    })
      .catch((err)=>{
        toast.error(err.response.data);
      });
     }
  }
  
  return (
    <>
    <Navbar/>
  
      <img src={rag2} alt="img2" width="100%"/>

    <Card className='logindetails1'>
    <h2 style={{color:"maroon",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Login Page</h2> 
     <label className='form-label'><h6>Select User Type:</h6></label>
    <select className='form-select' value={selectedusertype} onChange={(e)=>setSelectedusertype(e.target.value)} style={{marginLeft:'30px', width: "600px"}}>
      <option value={0}>--Select Options--</option>
      {
          user.map((item,index)=>(
            <option key={index} value={item}>
              {item}
            </option>
          ))
      }
    </select><br></br>

    <label className='form-label'><h6>Enter Emailid:</h6></label>
    <input type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} className='form-control' style={{ width: '600px'}} placeholder='@gmail.com'/><br></br>

    <label className='form-label'><h6>Enter Password:</h6></label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' style={{ width: '600px'}} placeholder='*****'/><br></br>

    <button type="button" className='btn btn-primary me-4' style={{marginLeft:"200px",width:"100px"}} onClick={Logincheck}>Submit</button>
    <button  className='btn btn-secondary' style={{marginLeft:"350px",width:"100px",marginTop:"-37px"}}>Cancel</button><br></br>
    </Card>

    {studblocked && (
            <h4>The Student is Blocked</h4>
          )}

  
    </>
  )
}
