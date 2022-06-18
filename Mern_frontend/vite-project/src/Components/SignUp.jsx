import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }


    const clickHandler =async (e) =>{
        e.preventDefault()
        console.warn(data)
        await axios.post("http://localhost:5000/register",data).then((res)=>{
          console.log(res)
          
         
        })
        .catch((err)=>{
          console.log(err)
        })

    }

    
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form>
          <div class="mb-3">
            <label for="input Name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="input Name"
              aria-describedby="Name"
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={changeHandler}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={changeHandler}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={clickHandler}>
            sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
