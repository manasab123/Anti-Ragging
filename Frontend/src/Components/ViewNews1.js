import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function ViewNews1()
 {
  const[newslist,setNewslist]=useState([]);                          //To display the News list

  useEffect(()=>{
    GetAllnews();
  })

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
  <br></br><br></br>
  <Card className='news1card' >
   <h3 style={{ color: 'green', fontFamily: 'monospace',fontWeight:"bold" ,textAlign:"center"}}>News List</h3>
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
