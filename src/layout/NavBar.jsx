import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                Home
            </NavLink>
            </li>
            
            <li>
            <NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>
                Products
            </NavLink>
            </li>

            <li>
            <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ""}>
                Cart
            </NavLink>
            </li>

            <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                Contact
            </NavLink>
            </li>
        </ul>
        </nav>
    );
}

export default NavBar;