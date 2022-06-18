import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [state,setState] = useState({
        email:"",
        password:""
    })
    const [user,setUser] = useState({
      token:"",
      user_access:[]
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const clickHandler = async(e) => {
        e.preventDefault()
        console.warn(state)
        await axios.post("http://localhost:5000/login",state)
        .then(res=>{
            console.log(res)
            if(res.data.login.token){
                console.log(res)
                setUser({
                  token:res.data.login.token,
                  user_access:res.data.path
                })
                localStorage.setItem('data',JSON.stringify(user))
                
            }
        })
        .catch(err=>{
            console.warn('provide valid data')
        })


    }

    
  return (
    <>
    <div className="container">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={changeHandler}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={changeHandler}/>
  </div>

  <button type="submit" class="btn btn-primary" onClick={clickHandler}>Submit</button>
</form>

    </div>
    </>
  )
}

export default Login