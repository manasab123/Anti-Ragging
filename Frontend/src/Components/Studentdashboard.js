import React from 'react'
import { FaEye, FaPaperPlane, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

export default function Studentdashboard() {
  return (
 <>
      <div className='admin-navbar'>
    <h1 className="dashboard-title">Welcome to Student Dashboard !</h1>

    <div className="dashboard-links">
     <Link to="/Studentdashboard/Postcomplaints" className="nav-item">
     <FaPaperPlane className="icon" />Post-Complaints</Link>

     <Link to="/Studentdashboard/Viewcomp2" className="nav-item">
        <FaEye className="icon" />View-Complaints</Link>

     <Link to="/Studentdashboard/Postfeedback" className="nav-item">
     <FaPaperPlane className="icon" />Post-Feedback</Link>

  
     <Link to="/Studentdashboard/Updatestudprofile" className="nav-item">
       <FaUserEdit className="icon" />Update-Profile</Link>

     <Link to="/Studentdashboard/Updatestudpaswd" className="nav-item">
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
