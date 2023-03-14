import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignupPage.css';

export default function AuthPage({ setUser }) {

    return (
        <header className='header-home'>

            <SignUpForm setUser={setUser} />
        </header>
    )
}