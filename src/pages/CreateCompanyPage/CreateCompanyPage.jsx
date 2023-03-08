import { useState } from 'react';
import CreateCompanyForm from '../../components/CreateCompanyForm/CreateCompanyForm'
import './CreateCompanyPage.css'

export default function CreateCompanyPage({ user }) {
    const [companies, setCompanies] = useState([]);


    return (
        <section className='dashboard-home'>
            <h1 className='add-title'>Add Company</h1>
            <CreateCompanyForm user={user} setCompanies={setCompanies} />
        </section>
    )
}