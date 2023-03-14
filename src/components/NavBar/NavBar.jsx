import { useState } from 'react'
import './NavBar.css';
import Settings from '../../components/Settings/Settings';

export default function NavBar({ user, lightMode, setLightMode }) {

    const [showSettings, setShowSettings] = useState(false);

    const handleClick = () => {
        setShowSettings(!showSettings);
    };


    return (
        <nav className='dash-nav'>
            <div>
                <p>Welcome! {user.name}</p>
                <a className="settings-icon" onClick={handleClick}>
                    <i className="fa-solid fa-gear"></i>
                </a>
            </div>
            {showSettings && <Settings lightMode={lightMode} setLightMode={setLightMode} />}
        </nav>
    )
}