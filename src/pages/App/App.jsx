import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
// import { getCompany } from '../../utilities/companies-api'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import CompaniesPage from '../CompaniesPage/CompaniesPage';
import CreateCompanyPage from '../CreateCompanyPage/CreateCompanyPage';
import CompanyDetailPage from '../CompanyDetailPage/CompanyDetailPage';
import UpdateCompanyPage from '../UpdateCompanyPage/UpdateCompanyPage';
import HomeNav from '../../components/HomeNav/HomeNav';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'
import SideMenu from '../../components/SideMenu/SideMenu'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <SideMenu />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/companies/create" element={<CreateCompanyPage user={user} />} />
              <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
              <Route path="/companies/:companyId/edit" element={<UpdateCompanyPage />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </>
          :
          <>
            <HomeNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage setUser={setUser} />} />
              <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            </Routes>
          </>
      }

    </main>
  );
}


