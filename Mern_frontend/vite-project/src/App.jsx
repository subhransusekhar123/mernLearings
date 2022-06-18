import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Components/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import GoogleForm from './Components/Form';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Multiple from './Components/Multiple';
import NewForm from './Components/NewForm';



function App() {
  

  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<GoogleForm/>}/>
            <Route path='/product' element={<h1>products</h1>}/>
            <Route path='/add' element={<h1>add product</h1>}/>
            <Route path='/update' element={<h1>update product</h1>}/>
            <Route path='/logout' element={<h1>logout</h1>}/>
            <Route path='/profile' element={<h1>profile</h1>}/>
            <Route path='/multiple' element={<Multiple/>}/>
          </Route>
          <Route path='/loginin' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/sendimage' element={<NewForm/>}/>

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
