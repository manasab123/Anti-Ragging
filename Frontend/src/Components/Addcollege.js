import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import  Card  from 'react-bootstrap/Card';

export default function Addcollege() 
{
  const[collegename,setCollegename]=useState('');
  const[address,setAddress]=useState('');
    const[emailid,setEmailid]=useState('');
    const[collegelist,setCollegelist]=useState([]);
    const[hideform,setHideform]=useState(false);
    const [collegeid, setCollegeid] = useState('');


  function AddCollegedetails()          /* Add College Details */
  {
    if(collegename==="")
    {
      toast.error("please enter college name");
      return;
    }
    if(address==="")
      {
        toast.error("please enter address");
        return;
      }
      if(emailid==="")
        {
          toast.error("please enter emailid");
          return;
        }
    const obj={collegename,address,emailid};
      axios
      .post("http://localhost:8080/AddCollegedetails",obj)
      .then((res)=>{
        toast.success(res.data);
        setHideform(false);
      clearAll();
      })
      .catch((err)=>{
        toast.error(err.response.data);
      })
  }

  function Getallcollegedetails()         /* Get All College Details */
  {
    axios
    .get("http://localhost:8080/Getallcollegedetails")
    .then((res)=>{
      toast.success(res.data);
      setCollegelist(res.data);
      setHideform(true);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
  }

  function clearAll()
  {
    setCollegename('');
    setAddress('');
    setEmailid('');
  }

  function updatecollege()  /* Update Colleges */
  {
    const obj={collegename,address,emailid};
      axios
      .put(`http://localhost:8080/updatecollege/${collegeid}`,obj)
      .then((res)=>{
        toast.success(res.data);
        Getallcollegedetails();
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
  }

  function getcollege(collegeid)  /* Assign Values */
  {
    axios
    .get(`http://localhost:8080/getcollege/${collegeid}`)
    .then((res)=>{
      setCollegeid(collegeid);
      setAddress(res.data.address);
      setCollegename(res.data.collegename);
      setEmailid(res.data.emailid);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
  }


  function deletecollege(collegeid)  /* Delete College */
  {
    axios
    .delete(`http://localhost:8080/deletecollege/${collegeid}`)
    .then((res)=>{
      toast.success(res.data);
      Getallcollegedetails();
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
  }

  return (
    <>

  <Card className='collegedetails'>
      <h3 style={{color:"Green",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Add Colleges</h3>  
      <label className='form-label'>Enter College Name:</label>
      <input type='text' className='form-control' value={collegename} onChange={(e)=>setCollegename(e.target.value)} style={{ width: '800px'}}/>
     
      <label className='form-label'>Enter College Address:</label>
    <input type='text' className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)} style={{ width: '800px'}}/>

    <label className='form-label'>Enter College Email-id:</label>
    <input type='text' className='form-control' value={emailid} onChange={(e)=>setEmailid(e.target.value)} style={{ width: '800px'}}/><br></br>
    
    <div className='btnss'>
      <button type="button" className='btn btn-warning me-3 ' onClick={Getallcollegedetails}>Show</button>
      { collegeid ? 
      ( 
      <button type="button" className='btn btn-success me-3' onClick={updatecollege}>Update</button>  
      )
      :
      (   
      <button type="button" className='btn btn-primary' onClick={AddCollegedetails}>Submit</button>
      )  
      }
     

      
      </div><br></br>
    </Card><br></br>

    
      {hideform && (
      <div className='displaydetails'>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Collegeid</th>
          <th>College Name</th>
          <th>Address</th>
          <th>Emailid</th>
        </tr>
      </thead>
      <tbody>
        {
          collegelist.map((item,index)=>(
            <tr key={index}>
              <td>{item.collegeid}</td>
              <td>{item.collegename}</td>
              <td>{item.address}</td>
              <td>{item.emailid}</td>
              <td><img src="https://w7.pngwing.com/pngs/766/581/png-transparent-computer-icons-editing-others.png" alt="editpic" onClick={()=>getcollege(item.collegeid)} width="50px"/></td>
              <td><img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={()=>deletecollege(item.collegeid)} alt="delpic" width="30px"/></td>
            </tr>
          ))
        }
      </tbody>
      </table><br></br>
      </div>
      )}
    </>
  )
}


