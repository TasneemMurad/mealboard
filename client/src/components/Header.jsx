import { NavLink } from 'react-router-dom'
function Header() {
return (
    <header>
        <h2>Mealboard</h2>
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
)
}
export default Header