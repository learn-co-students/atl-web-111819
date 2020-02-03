import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className='navbar'>
      <div className='header'> Books App (not Amazon duh!) </div>
      <Link to='/'> Home </Link>
      <Link to='/login'> Login </Link>
      <Link to='/signup'> Sign Up </Link>
    </div>
  )
}

export default Header;
