import React from "react";

function Login() {

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..."></input>
      <input type="password" name="password" placeholder="Enter password..."></input>
      <button>Login</button>
    </form>
  )

}

export default Login;
