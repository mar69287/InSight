import { useEffect } from 'react'
import './NavBar.css';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    // function handleLogOut() {
    //     userService.logOut()
    //     setUser(null)
    // }

    // useEffect(() => {
    //     let settingsIcon = document.querySelector('.settings-icon');
    //     let navUl = document.querySelector('.nav-ul');

    //     settingsIcon.addEventListener('click', () => {
    //         navUl.classList.toggle('active');
    //     });

    //     let navLinks = document.querySelectorAll('.nav-ul li a');
    //     navLinks.forEach(link => {
    //         link.addEventListener('click', () => {
    //             navUl.classList.remove('active');
    //         });
    //     });
    // }, []);

    return (
        <nav className='dash-nav'>
            <div>
                <p>Welcome! {user.name}</p>
                <a className="settings-icon">
                    <i class="fa-solid fa-gear"></i>
                </a>
            </div>
        </nav>
    )
}