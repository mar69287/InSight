import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage({ setUser }) {

    return (
        <header className='header-home'>

            <LoginForm setUser={setUser} />
        </header>
    )
}