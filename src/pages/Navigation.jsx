import { NavLink } from "react-router"

function Navigation() {
    return (
        <nav className="">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/">
                        Navlink
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;