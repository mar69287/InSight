import { useState } from 'react';
import CreateCompanyForm from '../../components/CreateCompanyForm/CreateCompanyForm'

export default function CreateCompanyPage({ user }) {
    const [companies, setCompanies] = useState([]);


    return (
        <CreateCompanyForm user={user} setCompanies={setCompanies} />
    )
}