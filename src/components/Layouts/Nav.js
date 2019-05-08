import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <NavLink to="/" exact activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </ul>
  </nav>
);

export default Nav;
