import React from "react";
import { useState } from "react";
import "./SignUP.css"
// import {Link} from 'react-router-dom';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    organization: ""
  });
  // const {username, password} = formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="sign-up-form"
      onSubmit={(e)=> {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <h3 className="sign-up-title">Sign Up</h3>
      <label>
        Firstname:
        <input className="sign-up-inputs" id="first-name"
          type="text"
          name=""
          value={formData.firstname}
          placeholder="Enter First Name"
          onChange={handleChange}
        />
      </label>
      
      <label>
        Lastname:
        <input className="sign-up-inputs" id="last-name"
          type="text"
          name=""
          value={formData.lastname}
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
      </label>
      
      <label>
        Username:
        <input className="sign-up-inputs" id="username"
          type="text"
          name=""
          value={formData.username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </label>
     
      <label>
        Email:
        <input className="sign-up-inputs" id="email"
          type=""
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
      </label>
    
      <label>
        Password:
        <input className="sign-up-inputs" id="password"
          type=""
          name="password"
          value={formData.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </label>
      
      <label>
        Organization:
        <input className="sign-up-inputs" id="organization"
          type="text"
          name=""
          value={formData.organization}
          placeholder="organization"
          onChange={handleChange}
        />
      </label>
      <div className="sign-up-div">
      <button className="sign-up-button">Sign Up</button>

      </div>
    </form>
  );
}
