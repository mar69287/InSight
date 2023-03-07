import { Link } from 'react-router-dom';
import './HomePage.css';

export default function NewOrderPage() {
    return (
        <>
            <nav className='home-nav'>
                <div className="logo">
                    <h1>InSight</h1>
                </div>
                <Link to="/login" className="login">Login</Link>
            </nav>
            <header className='header-home'>
                <div className="title">
                    <h1>Insightful Business <span>Management</span> </h1>
                    <h1>At Your Fingertips</h1>
                </div>
                <Link to="/signup" className="signup">Sign Up</Link>
            </header>
        </>
    )
}