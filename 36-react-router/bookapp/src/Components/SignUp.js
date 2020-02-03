import React, { Component } from 'react'

class SignUp extends Component {

  state = {
    username: '',
    password: ''
  }

  render(){
    return(
      <span className={'form-outer'}>
        <h2> Sign Up </h2>
        <form className={'add-book'}>
          <input type="text" name='username' placeholder="Username"  />
          <input type="password" name='password' placeholder="Password"  />
          <input id="submit" type="submit" value="Sign Up" />
        </form>
      </span>
    )
  }
}

export default SignUp;
