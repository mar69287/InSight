import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCompany } from '../../utilities/companies-api'
import UpdateCompanyForm from '../../components/UpdateCompanyForm/UpdateCompanyForm'
import './UpdateCompanyPage.css'

export default function UpdateCompanyPage({ user }) {
    const [company, setCompany] = useState(null);
    const { companyId } = useParams();

    useEffect(() => {
        async function getCompanyById() {
            const company = await getCompany(companyId);
            setCompany(company);
            // console.log(company)
        }
        getCompanyById();
    }, []);

    return (
        <section className='content-container flex-center'>
            {company ? (
                <>
                    <UpdateCompanyForm user={user} company={company} setCompany={setCompany} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    )
}