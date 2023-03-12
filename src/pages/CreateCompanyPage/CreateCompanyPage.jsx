import { useState, useEffect } from 'react';
import { getCompanies } from '../../utilities/companies-api'
import CreateCompanyForm from '../../components/CreateCompanyForm/CreateCompanyForm'
import PaymentButton from '../../components/PaymentButton/PaymentButton'
import { getPayments } from '../../utilities/payment-api'
import './CreateCompanyPage.css'

export default function CreateCompanyPage({ user }) {
    const [companies, setCompanies] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        async function getCompaniesAndPayments() {
            const companies = await getCompanies();
            setCompanies(companies);
            const payments = await getPayments();
            setPayments(payments);
        }
        getCompaniesAndPayments();
    }, []);

    return (
        <section className='dashboard-home'>
            {companies.length === 1 && payments.length === 0 ? (
                <PaymentButton setPayments={setPayments} />
            ) : <div className='add-company-container'>
                <h1 className='add-title'>Add Company</h1>
                <CreateCompanyForm user={user} setCompanies={setCompanies} />
            </div>}
        </section>
    )
}