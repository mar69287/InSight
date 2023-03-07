import { Link } from 'react-router-dom'
import './HomeNav.css';

export default function NavBar() {

    return (
        <nav className='home-nav'>
            <div className="logo">
                <Link to="/">InSight</Link>
            </div>
            <Link to="/login" className="login">Login</Link>
        </nav>
    )
}