import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <header className='header-home'>
            <div className="title">
                <h1>Insightful Business <span>Management</span> </h1>
                <h1>At Your Fingertips</h1>
            </div>
            <Link to="/signup" className="signup">Sign Up</Link>
        </header>
    )
}