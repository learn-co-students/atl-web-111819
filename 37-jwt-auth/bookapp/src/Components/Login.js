import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleFormInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: {...this.state} })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token',data.token)
      this.props.history.push('/')
    })
  }

  render(){
    console.log(this.props)
    return(
      <span className={'form-outer'}>
        <h2> Login </h2>
        <form className={'add-book'} onSubmit={this.handleSubmit}>
          <input type="text" name='username' onChange={this.handleFormInput} value={this.state.username} placeholder="Username"  />
          <input type="password" name='password' onChange={this.handleFormInput} value={this.state.password} placeholder="Password"  />
          <input id="submit" type="submit" value="Login" />
        </form>
      </span>
    )
  }
}

export default withRouter(Login);
