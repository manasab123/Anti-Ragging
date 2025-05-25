import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaPlus, FaEye, FaSignOutAlt } from 'react-icons/fa';

export default function Admindashboard() {
  return (
    <>
      <div className="admin-navbar">
        <h1 className="dashboard-title">Welcome to Admin Dashboard!</h1>

        <div className="nav-links">
          {/* Add Details Dropdown */}
          <div className="dropdown">
            <span className="dropdown-toggle">Add Details</span>
            <div className="dropdown-menu">
              <Link to="/Admindashboard/Addcollege">Add College</Link>
              <Link to="/Admindashboard/Addcourse">Add Course</Link>
              <Link to="/Admindashboard/Addbranch">Add Branch</Link>
            </div>
          </div>

          {/* Register Dropdown */}
          <div className="dropdown">
            <span className="dropdown-toggle">Register</span>
            <div className="dropdown-menu">
              <Link to="/Admindashboard/Principal">Principal</Link>
              <Link to="/Admindashboard/Squad">Squad</Link>
            </div>
          </div>

          {/* Single Links */}
          <Link to="/Admindashboard/Addnews" className="nav-item">
            <FaPlus className="icon" /> Add News
          </Link>

          <Link to="/Admindashboard/Viewcomplaints" className="nav-item">
            <FaEye className="icon" /> View Complaints
          </Link>

          <Link to="/Admindashboard/Viewstudents" className="nav-item">
            <FaEye className="icon" /> View Students
          </Link>

          {/* Logout Button */}
          <Link to="/" className="logout-btn">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}
