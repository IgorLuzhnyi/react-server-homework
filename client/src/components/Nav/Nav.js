import { NavStyled } from "./NavStyled";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/adduser">Add User</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/addnews">Add News</NavLink>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;
