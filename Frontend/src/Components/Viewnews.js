import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Viewnews() 
{
  const[newslist,setNewslist]=useState([]);  //To display News list

  useEffect(()=>{
    GetAllnews();
  },[])


  function GetAllnews()           /*   View News  */
  {
    axios
    .get("http://localhost:8080/GetAllnews")
    .then((res)=>{
      setNewslist(res.data);
    })
    .catch((err)=>{
      toast.error(err.response.data);
    });
  }

  return (
    <>
<br></br>
     <Card className='viewnewscard' >
   <h3 style={{ color: 'blue', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>News List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>News id</th>
      <th>News</th>
    </tr>
    </thead>
    <tbody>
      {
        newslist.map((item, index) => (
          <tr key={index}>
        <td>{item.newsid}</td>
        <td>{item.news}</td>
          </tr>
          ))
      }
    </tbody>
    </table>
    </Card>
  </>
  )
}
