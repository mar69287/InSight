import { Link } from 'react-router-dom'
import './Settings.css';
import * as userService from '../../utilities/users-service'

export default function Settings({ setUser, lightMode, setLightMode }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    const handleLightMode = () => {
        setLightMode(!lightMode);
    };


    return (
        <div className='settings'>
            <button onClick={handleLightMode}>
                {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
    )
}