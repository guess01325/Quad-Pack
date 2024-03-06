import React from "react";
import { useState } from "react";
import "../assets/SignUP.css";


export default function SignUp(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    organization: "",
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
    <form
      className="sign-up-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <h3 className="sign-up-title">Sign Up</h3>
        Firstname:
      <label>
        <input
          className="sign-up-inputs"
          id="first-name"
          type="text"
          name="firstname"
          value={formData.firstname}
          // placeholder="Enter First Name"
          onChange={handleChange}
        />
      </label>

        Lastname:
      <label>
        <input
          className="sign-up-inputs"
          id="last-name"
          type="text"
          name="lastname"
          value={formData.lastname}
          // placeholder="Enter Last Name"
          onChange={handleChange}
        />
      </label>

        Username:
      <label>
        <input
          className="sign-up-inputs"
          id="username"
          type="text"
          name="username"
          value={formData.username}
          // placeholder="Enter Username"
          onChange={handleChange}
        />
      </label>

        Email:
      <label>
        <input
          className="sign-up-inputs"
          id="email"
          type="text"
          name="email"
          value={formData.email}
          // placeholder="Enter Email"
          onChange={handleChange}
        />
      </label>

        Password:
      <label>
        <input
          className="sign-up-inputs"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          // placeholder="Enter Password"
          onChange={handleChange}
        />
      </label>

        Organization:
      <label>
        <input
          className="sign-up-inputs"
          id="organization"
          type="text"
          name="organization"
          value={formData.organization}
          // placeholder="organization"
          onChange={handleChange}
        />
      </label>
      <div className="sign-up-button">
        <button>Sign Up</button>
      </div>
    </form>
  );
}
