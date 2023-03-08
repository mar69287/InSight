import { Link } from 'react-router-dom'
import './SideMenu.css';

export default function SideMenu() {

    return (
        <nav className='side-menu'>
            <div className="logo">
                <p>InSight</p>
            </div>
            <ul>
                <li><Link to="/dashboard" className="menu-links"><div><i class="fa-solid fa-sitemap"></i></div>Dashboard</Link></li>
                <li className='label'>Companies</li>
                <li><Link to="/companies/create" className="menu-links"><div><i class="fa-solid fa-plus"></i></div>Add</Link></li>
                <li><Link to="/companies/index" className="menu-links"><div><i class="fa-solid fa-city"></i></div>View All</Link></li>
                <li className='label'>Apps</li>
            </ul>
        </nav >
    )
}