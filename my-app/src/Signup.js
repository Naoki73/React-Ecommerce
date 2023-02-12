import React, { Component } from 'react'

export default function SignUp() {

  const handleSubmit = async(e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const reqBody = {
      username: username,
      email: email,
      password: password
    }

    const url = ''
    const options = {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": 'application/json'
      }
    }
    if (password!== confirmPassword) {
      console.log("Password doesn't match")
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

  };


  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input name='username' placeholder='Username' />
        <input name='email' placeholder='Email' />
        <input name='password' type='password' placeholder='Password'/>
        <input name='confirmPassword' type='password' placeholder='Confirm Password'/>
        <button type='submit'>Sign Up</button>

      </form>

    </div>
  )
}
