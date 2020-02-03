import React, { Component } from 'react'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  render(){
    return(
      <span className={'form-outer'}>
        <h2> Login </h2>
        <form className={'add-book'}>
          <input type="text" name='username' placeholder="Username"  />
          <input type="password" name='password' placeholder="Password"  />
          <input id="submit" type="submit" value="Login" />
        </form>
      </span>
    )
  }
}

export default Login;
