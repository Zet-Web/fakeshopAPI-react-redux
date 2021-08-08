import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <h1>
          <NavLink to={'/'}>FakeShop</NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Header;
