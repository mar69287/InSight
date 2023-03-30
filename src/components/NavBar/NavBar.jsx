import { useState, useEffect } from 'react'
import './NavBar.css';
import Settings from '../../components/Settings/Settings';

export default function NavBar({ user, lightMode, setLightMode }) {
    const [showSettings, setShowSettings] = useState(false);

    const handleSettingsClick = () => {
        setShowSettings(!showSettings);
    };

    useEffect(() => {
        let hamburgerIcon = document.querySelector('.ham-icon');
        let sideMen = document.querySelector('.side-menu');

        hamburgerIcon.addEventListener('click', () => {
            sideMen.classList.toggle('active');
            // console.log('working')
        });

        let sideMenuLinks = document.querySelectorAll('.side-menu li a');
        sideMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                sideMen.classList.remove('active');
            });
        });
    }, []);

    return (
        <nav className='dash-nav'>
            <i className="fa fa-bars ham-icon"></i>
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