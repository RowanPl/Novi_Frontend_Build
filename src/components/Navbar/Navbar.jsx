import "./Navbar.css"
import logo from "../../assets/Logo.svg?react"
import {NavLink} from "react-router-dom";

function Navbar() {


    return (
        <div className={"fixed"}>
            <nav className={"navbar"}>
                <NavLink to={"/"} className={"default"}>
                    <img className="logo" src={logo} alt="Logo of Novi Hogeschool"/>
                </NavLink>
                <ul className="list">
                    <li>
                        <NavLink to="/">API docs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Create">Create new database</NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;