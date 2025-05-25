import React from 'react'
import { FaEye, FaSignOutAlt, FaUserEdit, FaUsers } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'


export default function Principaldashboard()
 {

  return (
  <>
      <div className='admin-navbar'>
    <h1 className="dashboard-title">Welcome to Principal Dashboard !</h1><br></br>
<br></br>
<div className="dashboard-links">
     <Link to="/Principaldashboard/Managestudent" className="nav-item">
     <FaUsers className="icon" />Manage-Students</Link>

     <Link to="/Principaldashboard/Viewnews" className="nav-item">
    <FaEye className="icon" /> View-News</Link>

     <Link to="/Principaldashboard/Viewcomp"  className="nav-item">
   <FaEye className="icon" /> View-Complaints</Link>

     <Link to="/Principaldashboard/ViewFeedback"  className="nav-item">
    <FaEye className="icon" /> View-Feedback</Link>

     <Link to="/Principaldashboard/Viewstud"  className="nav-item">
    <FaEye className="icon" /> View-Students</Link>

     <Link to="/Principaldashboard/UpdatePrinProfile"  className="nav-item">
     <FaUserEdit className="icon" />Update-Profile</Link>

     <Link to="/Principaldashboard/UpdatePrinpswd" className="nav-item">
     <FaUserEdit className="icon" />Update-Password</Link>

     <Link to="/" className="logout-btn">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
     </div>

      
     </div>
     <Outlet/>
  </>
  )
}
