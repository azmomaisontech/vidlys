import React, { useState } from "react";

const RegisterForm = () => {
  const [data, setData] = useState({ username: "", password: "", name: "" });

  const doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={doSubmit}>
        <input type="text" />
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    </div>
  );
};

export default RegisterForm;
