import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Ingatlanok
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/AdminPage"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;