import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignupPage.css';

export default function AuthPage({ setUser }) {

    return (
        <SignUpForm setUser={setUser} />
    )
}