import React from 'react'
import "./Header.css"
import logo from "../../assests/buker-logo.svg"
import bellNotification from "../../assests/bell-notification.svg"
import profile from "../../assests/profile.svg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='main-header'>
      <Link to={"/"}>
      <img src={logo}/>
      </Link>
      <div>
      <img src={bellNotification}/>
      <img src={profile}/>
      </div>
    </div>
  )
}

export default Header