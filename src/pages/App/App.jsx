import './App.css';
import './light.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import '@stripe/stripe-js'
import CheckoutPage from '../CheckoutPage/CheckoutPage'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import CompaniesPage from '../CompaniesPage/CompaniesPage';
import CreateCompanyPage from '../CreateCompanyPage/CreateCompanyPage';
import CompanyDetailPage from '../CompanyDetailPage/CompanyDetailPage';
import UpdateCompanyPage from '../UpdateCompanyPage/UpdateCompanyPage';
import AddEmployeePage from '../AddEmployeePage/AddEmployeePage';
import EditEmployeePage from '../EditEmployeePage/EditEmployeePage';
import CalendarPage from '../CalendarPage/CalendarPage';
import HomeNav from '../../components/HomeNav/HomeNav';
import NavBar from '../../components/NavBar/NavBar'
import SideMenu from '../../components/SideMenu/SideMenu'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [lightMode, setLightMode] = useState(false);

  return (
    <main className={`App ${lightMode ? 'light' : ''}`}>
      {
        user ?
          <>
            <NavBar user={user} lightMode={lightMode} setLightMode={setLightMode} />
            <SideMenu />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage lightMode={lightMode} />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/calendar" element={<CalendarPage user={user} />} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/companies/create" element={<CreateCompanyPage user={user} />} />
              <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
              <Route path="/companies/:companyId/edit" element={<UpdateCompanyPage />} />
              <Route path="/companies/:companyId/employee" element={<AddEmployeePage />} />
              <Route path="/companies/:companyId/employee/:employeeId/edit" element={<EditEmployeePage />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </>
          :
          <>
            <HomeNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route path="/login" element={<LoginPage setUser={setUser} />} />
              <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            </Routes>
          </>
      }

    </main>
  );
}


