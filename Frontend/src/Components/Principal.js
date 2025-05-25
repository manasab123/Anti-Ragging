import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import book from '../Components/book.jpg';

export default function Principal() 
{
    const[collegelist,setCollegelist]=useState([ ]);    //Dropdown list for college names
    const[selectcollege,setSelectcollege]=useState('');
    const[principalname,setPrincipalname]=useState('');
    const[mobileno,setMobileno]=useState('');
    const[qualification,setQualification]=useState('');
    const[emailid,setEmailid]=useState('');

    useEffect(()=>{
        Getallcollegedetails();
    },[])

    function Addpricipaldetails()           /* Add Principal Details */
    {
      if(selectcollege==="")
        {
          toast.error("please select the college");
          return;
        }
        if(principalname==="")
          {
            toast.error("please enter Principal name");
            return;
          }
        if (!/^\+91\d{10}$/.test(mobileno)) {
                   toast.error("Mobile number should start with +91 and be followed by 10 digits");
                   return;
                 }
            if(qualification==="")
              {
                toast.error("please enter qualification");
                return;
              }
              if(emailid==="")
              {
                toast.error("Please enter emailid");
                return;
              }
      const obj={principalname,mobileno,qualification,selectcollege,emailid};
        axios
        .post(`http://localhost:8080/Addpricipaldetails/${selectcollege}`,obj)
        .then((res)=>{
          toast.success(res.data);
          clearAll();
        })
        .catch((err)=>{
          toast.error(err.response.data);
        });
    }
    
    function clearAll()
{
  setMobileno('');
  setPrincipalname('');
  setQualification('');
  setSelectcollege('');
  setEmailid("");
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

  return (
   <>
  

<img src={book} alt="primg" width="1350px"/>

<Card className='princard'>
<h3 style={{color:"orange",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Register Principal</h3>  
     <label className='form-label'>Choose College:</label>
     <select className="form-select" value={selectcollege} onChange={(e)=>setSelectcollege(e.target.value)} style={{ width: '800px',marginLeft:"25px"}}>
     <option value={0}>--Select College--</option>
     {
       collegelist.map((item,index)=>(
         <option key={index} value={item.collegeid}>{item.collegeid}-{item.collegename}</option>
       ))
     }
     </select><br></br>

     <label className='form-label'>Enter Principal Name:</label>
   <input type="text" value={principalname} onChange={(e)=>setPrincipalname(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

      <label className='form-label'>Enter Mobileno:</label>
   <input type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} className='form-control' style={{ width: '800px'}} placeholder='+91'/><br></br>
      
   <label className='form-label'>Enter Qualification:</label>
   <input type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)} className='form-control' style={{ width: '800px'}}/><br></br>

     <label className='form-label'>Enter Emailid:</label>
     <input type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} className='form-control' style={{ width: '800px'}} placeholder='example@gmail.com'/><br></br>
     
     <div className='btndiv'>
                <button type="button" className='btn btn-primary me-4' onClick={Addpricipaldetails} style={{ marginLeft: "400px",marginTop:"5px" }}>Submit</button>
              </div>
            </Card>
   </>
  )
}
