import React from "react";

import { useState } from "react";

const GoogleForm = () => {
  const [check, setCheck] = useState(false);

  const [input, setInput] = useState({
    name: "",

    locality: "",

    id: "",

    birthday: "",

    event: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    console.log(input);
  };

  const clickHandler = (e) => {
    if(check == false){
        setCheck(true)
    }else{
        setCheck(false)
    }
    setInput({...input,[e.target.name]:check})
   console.log(input)
  };

  console.log("inputbirthday",input.birthday,"next",input.event)

  return (
    <div className="googleForm">
      
      <div className="container">
       <form action="">

        
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
       
        <input
          type="text"
          placeholder="locality"
          name="locality"
          onChange={handleChange}
        />
      
        <input
          type="text"
          placeholder="Instagram ID"
          name="id"
          onChange={handleChange}
        />

        <div className="check">

          <input type="checkbox" name="birthday" id="" onChange={clickHandler} value={check}/>
          <input type="checkbox" name="event" id="" onChange={clickHandler} value={check}/>

        </div>
    
       </form>
      </div>
    
    </div>
  );
};

export default GoogleForm;
