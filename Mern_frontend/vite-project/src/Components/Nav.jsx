import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link, Navigate} from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('data')
  const logout = ()=>{
    localStorage.clear()
    Navigate('/')

  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        {
          auth?<div class="navbar-nav">
          <Link to="/product"><a class="nav-link active" aria-current="page" href="#">product</a></Link>
          <Link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
          <Link to="/add"><a class="nav-link active" aria-current="page" href="#">add</a></Link>
          <Link to="/update"><a class="nav-link active" aria-current="page" href="#">update</a></Link>
          <Link to="/profile"><a class="nav-link active" aria-current="page" href="#">profile</a></Link>
          <Link to="/logout" ><a class="nav-link active" aria-current="page" href="#" onClick={logout}>logout{JSON.parse(auth).name}</a></Link> 


          </div>
          :
          <div class="navbar-nav">

        
          <Link to="/signup"><a class="nav-link active" aria-current="page" href="#">signup</a></Link>
          <Link to="/loginin"><a class="nav-link active" aria-current="page" href="#">sign in </a></Link>

        
          </div>
        }
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav