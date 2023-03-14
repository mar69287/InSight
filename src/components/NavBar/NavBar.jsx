import { useState } from 'react'
import './NavBar.css';
import Settings from '../../components/Settings/Settings';

export default function NavBar({ user, lightMode, setLightMode }) {
    let sideMenu = document.querySelector('.side-menu')
    const [showSettings, setShowSettings] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleSettingsClick = () => {
        setShowSettings(!showSettings);
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        if (showMenu) {
            sideMenu.style.display = 'none';
        } else {
            sideMenu.style.display = 'flex';
        }
    };


    return (
        <nav className='dash-nav'>
            <i className="fa fa-bars" onClick={handleMenuClick}></i>
            <div>
                <p>Welcome! {user.name}</p>
                <a className="settings-icon" onClick={handleSettingsClick}>
                    <i className="fa-solid fa-gear"></i>
                </a>
            </div>
            {showSettings && <Settings lightMode={lightMode} setLightMode={setLightMode} />}
        </nav>
    )
}