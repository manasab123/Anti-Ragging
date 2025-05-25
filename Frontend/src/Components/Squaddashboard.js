import React from 'react'
import { FaEye, FaSignOutAlt, FaUserEdit, FaUsers } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

export default function Squaddashboard() 
{

  return (
    <>
      <div className='admin-navbar'>
    <h1  className="dashboard-title">Welcome to Squads Dashboard !</h1>
    <div className="dashboard-links">
     <Link to="/Squaddashboard/ViewNews1"  className="nav-item">
     <FaEye className="icon" /> View-News</Link>

     <Link to="/Squaddashboard/Viewcomp1"  className="nav-item">
      <FaEye className="icon" /> View-Complaints</Link>

     <Link to="/Squaddashboard/Viewstud1"  className="nav-item">
  <FaEye className="icon" /> View-Students</Link>

     <Link to="/Squaddashboard/Managecomp"  className="nav-item">
<FaUsers className="icon" />Manage-Complaints</Link>
 
     <Link to="/Squaddashboard/UpdateSquadProfile"  className="nav-item">
    <FaUserEdit className="icon" />Update-Profile</Link>

     <Link to="/Squaddashboard/UpdateSquadPaswd"  className="nav-item">
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
