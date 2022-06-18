import React from 'react'
import { Outlet, useNavigate,Navigate, useLocation } from 'react-router-dom';


const PrivateComponent = () => {
  let location = useLocation()
  const navigate = useNavigate()
  
    let auth =JSON.parse( localStorage.getItem('data'))
    let isThere = auth?.user_access.includes(location.pathname)
    console.log(location.pathname)
    console.log(auth)
  return (
    
    

      auth && isThere ? <Outlet/> : <Navigate to="/signup"/>
    
    
      
    
   
  )
}

export default PrivateComponent;