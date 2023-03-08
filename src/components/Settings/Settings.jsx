import { Link } from 'react-router-dom'
import './Settings.css';
import * as userService from '../../utilities/users-service'

export default function Settings({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }


    return (
        <div className='settings'>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
    )
}