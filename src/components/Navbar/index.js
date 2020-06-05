import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser } = props;
  
  return(
    <div>
      <NavLink to='/products'>Products Index page</NavLink>
      |
      <NavLink to='/products/new'>New Product</NavLink>
      |
      <NavLink to='/sign_in'>Sign In</NavLink>
      |
      { currentUser.first_name && `${currentUser.first_name} ${currentUser.last_name}` }
    </div>
  )
}

export default Navbar