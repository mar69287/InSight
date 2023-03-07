import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </>
          :
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
          </Routes>
      }

    </main>
  );
}


