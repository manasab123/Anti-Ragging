import React from 'react'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';



export default function Addnews()
 {
    const[news,setNews]=useState('');
    const[newslist,setNewslist]=useState([]);
    const[hideform,setHideform]=useState(false);
    const [newsid, setNewsid] = useState('');

    function Addnews()    /* To Add News Form */
{
  if(news==="")
    {
      toast.error("please enter news");
      return;
    }
  const obj={news};
    axios
    .post("http://localhost:8080/Addnews",obj)
    .then((res)=>{
      toast.success(res.data);
      setHideform(false);
      clearAll();
    })
    .catch((err)=>{
      toast.error(err.responsse.data);
    });
}

function clearAll()
{
    setNews('');
}

function GetAllnews()  /* Display All News List */
{
  axios
  .get("http://localhost:8080/GetAllnews")
  .then((res)=>{
    setNewslist(res.data);
    setHideform(true);
  })
  .catch((err)=>{
    toast.error(err.responsse.data);
  });
}

function updatenews()  /* Update News Details */
{
  if(news==="")
  {
    toast.error("Please enter News Details");
    return;
  }
  const obj={news};
  axios
  .put(`http://localhost:8080/updatenews/${newsid}`,obj)
  .then((res)=>{
    toast.success(res.data);
    GetAllnews();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

function getnews(newsid)  /* Assign Values */
{
  axios
  .get(`http://localhost:8080/getnews/${newsid}`)
  .then((res)=>{
    setNewsid(newsid);
    setNews(res.data.news);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


function deletenews(newsid)  /* Delete Particular News */
{
  debugger;
  axios
  .delete(`http://localhost:8080/deletenews/${newsid}`)
  .then((res)=>{
    toast.success(res.data);
    GetAllnews();
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}

  return (
   <>

    <Card className='newscard'>
<h3 style={{color:"orange",fontFamily:"monospace",textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>Post News</h3>
<label className='form-label'><h5>Post News:</h5></label> <br></br>
<input type="text" value={news} className='form-control' onChange={(e) => setNews(e.target.value)} style={{width:"450px"}}/><br></br>
 <div className='btnss'>

    
 <button type="button" className='btn btn-warning me-4' onClick={GetAllnews}>Show</button>

 { newsid ? 
      ( 
      <button type="button" className='btn btn-success me-3' onClick={updatenews}>Update</button>  
      )
      :
      (   
        <button type="button" className='btn btn-primary me-4' onClick={Addnews}>Submit</button>
      )  
      }

   </div><br></br>
    </Card>


    {hideform && (
      <div className='newslist'>
        <h1 style={{padding:"10px",textAlign:"center",color:"orange",fontFamily:"monospace",fontWeight:"bold"}}>News List:</h1>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Newsid</th>
          <th>News Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          newslist.map((item,index)=>(
            <tr key={index}>
              <td>{item.newsid}</td>
              <td>{item.news}</td>
              <td><img src="https://w7.pngwing.com/pngs/766/581/png-transparent-computer-icons-editing-others.png" alt="editpic" onClick={()=>getnews(item.newsid)} width="50px"/></td>
              <td><img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={()=>deletenews(item.newsid)} alt="delpic" width="30px"/></td>
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
