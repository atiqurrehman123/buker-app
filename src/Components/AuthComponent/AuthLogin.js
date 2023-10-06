import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

const AuthLogin = ({children}) => {
    const [user]=useState(localStorage.getItem("adminLogin"))
    if(user){
        return <><Sidebar/></>
    }else{
        return <>{children}</>
    }
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default AuthLogin