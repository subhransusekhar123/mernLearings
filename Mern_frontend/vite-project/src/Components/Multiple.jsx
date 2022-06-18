import axios from "axios";
import React, { useState } from "react";


  
function Multiple() {
  const [userinfo, setUserInfo] = useState({
    service: [],
  });

  const [instaCheck,setInstaCheck] = useState("");

  const checkInstaHandler = (e) =>{
    const { value, checked } = e.target;
    if (checked) {
      setInstaCheck(value)
      console.log(instaCheck)
    }
    // Case 2  : The user unchecks the box
    else {
      setInstaCheck("")
      console.log(instaCheck)
    }

  };


  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { service } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        service: [...service, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        service: service.filter((e) => e !== value),
      });
      console.log(service)
    }
  };


  return (
    <>
      <div className="container-fluid top ">
        <div className="container mt-5  pb-5 pt-5">
          <h3 className="form-head-contact-h3 ">
          area of service?{" "}
          </h3>
  
          <form>

            <div className="row">
              <div className="container">
                <input type="text" name="name" id="" placeholder="name"/>
                <input type="text" name="locality" id="" placeholder="locality"/>
                
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="wedding"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      wedding
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="Prewedding"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      prewedding
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="birthday"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      birthday
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="portrait"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      portrait
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="product"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      product
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="event"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      event
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="babyshoot"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      babyshoot
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="service"
                    value="architecture"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                     architecture
                  </label>
                </div>
              </div>

              <div className="container">
                <span>do u agree we can use ur instagram picture to checkbox</span>
                <input type="checkbox" name="instagram" value="yes" id="" onChange={checkInstaHandler}/>
              </div>

            </div>
            <div className="container">
              <button className="btn btn-primary" onClick={clickHandler}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
  
export default Multiple;