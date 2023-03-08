import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCompanies } from '../../utilities/companies-api'
import './CompaniesPage.css';

export default function CompaniesPage() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getAllCompanies() {
            const companies = await getCompanies();
            setCompanies(companies);
        }
        getAllCompanies();
    }, []);

    return (
        <section className='dashboard-home'>

            <div className="company-index">
                {companies.map((company, idx) => (
                    <Link to={`/companies/${company._id}`} >
                        <div className="company-container" key={idx}>
                            <h1>{company.name}</h1>
                            <div>
                                <div>
                                    <p>Number of Employees:</p> <p>{company.employees.length}</p>
                                </div>
                                <div>
                                    <p>Status:</p> <p>{company.active ? "Active" : "Not Active"}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    )
}