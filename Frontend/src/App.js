import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Addcollege from './Components/Addcollege'
import Addcourse from './Components/Addcourse'
import Addbranch from './Components/Addbranch'
import Principal from './Components/Principal'
import Studreg from './Components/Studreg'
import Admindashboard from './Components/Admindashboard'
import Studentdashboard from './Components/Studentdashboard'
import Squaddashboard from './Components/Squaddashboard'
import Principaldashboard from './Components/Principaldashboard'
import Squad from './Components/Squad'
import Addnews from './Components/Addnews'
import Viewcomplaints from './Components/Viewcomplaints'
import Viewstudents from './Components/Viewstudents'
import Managestudent from './Components/Managestudent'
import Viewnews from './Components/Viewnews'
import Viewcomp from './Components/Viewcomp'
import ViewFeedback from './Components/ViewFeedback'
import Viewstud from './Components/Viewstud'
import UpdatePrinpswd from './Components/UpdatePrinpswd'
import UpdatePrinProfile from './Components/UpdatePrinProfile'
import Managecomp from './Components/Managecomp'
import ViewNews1 from './Components/ViewNews1'
import Viewcomp1 from './Components/Viewcomp1'
import UpdateSquadProfile from './Components/UpdateSquadProfile'
import UpdateSquadPaswd from './Components/UpdateSquadPaswd' 
import Postfeedback from './Components/Postfeedback'
import Postcomplaints from './Components/Postcomplaints'
import Viewcomp2 from './Components/Viewcomp2'
import Updatestudprofile from './Components/Updatestudprofile'
import Updatestudpaswd from './Components/Updatestudpaswd'
import Viewstud1 from './Components/Viewstud1'

export default function App() 
{


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Studreg" element={<Studreg/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        
        <Route path="Admindashboard" element={<Admindashboard />} >
        <Route path="Addcollege" element={<Addcollege/>}/>
        <Route path="Addcourse" element={<Addcourse/>}/>
        <Route path="Addbranch" element={<Addbranch/>}/>
        <Route path="Principal" element={<Principal />} />
        <Route path="Squad" element={<Squad />} />
        <Route path="Addnews" element={<Addnews />} />
        <Route path="Viewcomplaints" element={<Viewcomplaints />} />
        <Route path="Viewstudents" element={<Viewstudents />} />
        </Route>
      
        
        <Route path="Principaldashboard" element={<Principaldashboard />} >
        <Route path="Managestudent" element={<Managestudent />} />
        <Route path="Viewnews" element={<Viewnews />} />
        <Route path="Viewcomp" element={<Viewcomp />} />
        <Route path="ViewFeedback" element={<ViewFeedback />} />
        <Route path="Viewstud" element={<Viewstud />} />
        <Route path="UpdatePrinProfile" element={<UpdatePrinProfile />} />
        <Route path="UpdatePrinpswd" element={<UpdatePrinpswd />} />
        </Route>


        <Route path="Squaddashboard" element={<Squaddashboard />} >
        <Route path="ViewNews1" element={<ViewNews1 />} />
        <Route path="Viewcomp1" element={<Viewcomp1 />} />
        <Route path="Viewstud1" element={<Viewstud1 />} />
        <Route path="Managecomp" element={<Managecomp />} />
        <Route path="UpdateSquadProfile" element={<UpdateSquadProfile />} />
        <Route path="UpdateSquadPaswd" element={<UpdateSquadPaswd />} />
        </Route>

       
        <Route path="Studentdashboard" element={<Studentdashboard />} >  
        <Route path="Postfeedback" element={<Postfeedback />} />
        <Route path="Postcomplaints" element={<Postcomplaints />} />  
        <Route path="Viewcomp2" element={<Viewcomp2 />} />
        <Route path="Updatestudprofile" element={<Updatestudprofile />} />
        <Route path="Updatestudpaswd" element={<Updatestudpaswd />} />
      </Route>
     
   
      </Routes>
      <ToastContainer />
    </Router>
  )
}
