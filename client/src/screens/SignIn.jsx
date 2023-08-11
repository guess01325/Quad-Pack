import React from "react";
import { useState } from "react";
import "../assets/SignIn.css";

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}
    >
      <h3 className="login-title">Login</h3>
      <div className="labels">
          Username:
        <label>
          <input
            className="sign-in-inputs"
            id="username"
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username"
            onChange={handleChange}
            
          />
        </label>

          Password:
        <label>
          <input
            className="sign-in-inputs"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="sign-in-div">
        <button className="sign-in-button">Sign In</button>
      </div>
    </form>
  );
}
