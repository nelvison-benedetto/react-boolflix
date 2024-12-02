//components/MainMenu.jsx
import { Link, NavLink } from "react-router-dom";

export default function MainMenu(){
    return(
        <nav className="d-flex gap-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
        </nav>
    );
}