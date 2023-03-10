import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteCompany, getCompany } from '../../utilities/companies-api'
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import './CompanyDetailPage.css';

export default function CompanyDetailPage() {
    const { companyId } = useParams();
    const [company, setCompany] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function getCompanyById() {
            const company = await getCompany(companyId);
            setCompany(company);
        }
        getCompanyById();
    }, []);

    async function handleDelete() {
        await deleteCompany(company._id);
        navigate('/companies')
    }

    async function handleEmployeeDelete() {
        const updatedCompany = await getCompany(companyId);
        setCompany(updatedCompany);
    }

    return (
        <section className='dashboard-home'>
            <div className="company-detail">
                {company ? (
                    <>
                        <button onClick={handleDelete}>Delete</button>
                        <Link to={`/companies/${company._id}/edit`}>Edit</Link>
                        <h1>{company.name}</h1>
                        <div className="money">
                            <div className="sales">
                                <h1>{company.active ? "Active" : "Not Active"}</h1>
                                <p>Status</p>
                            </div>
                            <div className="sales">
                                <h1>${company.sales}</h1>
                                <p>Sales</p>
                            </div>
                            <div className="revenue">
                                <h1>${company.revenue}</h1>
                                <p>Revenue</p>
                            </div>
                            <div className="orders">
                                <h1>{company.orders}</h1>
                                <p>Online Orders</p>
                            </div>
                            <div className="inventory">
                                <h1>{company.inventory}</h1>
                                <p>Inventory</p>
                            </div>
                        </div>
                        <EmployeeTable company={company} handleEmployeeDelete={handleEmployeeDelete} />

                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    )
}