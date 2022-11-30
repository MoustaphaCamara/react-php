import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">List of users</NavLink>
          <NavLink to="/:id/edituser">Edit User</NavLink>
          <NavLink to="/createuser">Create user</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
