import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <>
   <Navbar/>
  
      <div className='contact-details'>
      <h1 style={{color:"maroon",fontFamily:"initial",fontWeight:"bold"}}>Contact</h1>
     <address>
      <p> Anti Ragging Cell</p>
      <p>7J9C+FX7,</p>
      <p>Madhuvana Layout,</p>
      <p>Mysuru-110021</p>
      <p>Karnataka-570023</p>
    </address>
    </div>

<div className='details2'>
<h2 style={{color:"maroon",fontFamily:"initial",fontWeight:"bold"}}>Monitoring Agency</h2>
<p>Phone No -: 91-11416 19005</p>
<p>Email -: antiragging@c4yindia.org</p>
</div>

<div className='details3'>
<h2 style={{color:"maroon",fontFamily:"initial",fontWeight:"bold"}}>Sitemap</h2>
<ul>
  <li>Home</li>
  <li>Register</li>
  <li>Login</li>
</ul>
</div>
</>
  )
}
