import React, { useState } from 'react'
import './profile.css'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  const [show,setShow]=useState(localStorage.getItem('loggedIn'))
  console.log(show)
  const handleLogout=()=>{
    localStorage.clear();
    setShow(!show);
  }

  const Renderprofile=()=>{
    if(show){
      return (
        <div className='user-profile'>
           <ul>
           <li><NavLink to='/dashboard' className="dashboard"> Dashboard </NavLink></li>
            <li><NavLink to="/login" className="lgbtn" onClick={handleLogout} >Logout</NavLink>  </li>
          </ul>
    
        </div>
      )
    }
    else{
      return(
        <div className='user-profile'>
          <ul>
          <li><NavLink to="/register" className="register" >Register</NavLink></li>
          <li><NavLink to="/login" className="login">Login</NavLink></li>
          </ul>
        </div>
      )
    }

}
return(
  <>
  <Renderprofile/>
  </>
)


}

export default Profile
