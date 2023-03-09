import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployee } from '../../utilities/companies-api'
import EditEmployeeForm from '../../components/EditEmployeeForm/EditEmployeeForm'
import './EditEmployeePage.css'

export default function EditEmployeePage() {
    const [employee, setEmployee] = useState(null);
    const { companyId, employeeId } = useParams();

    useEffect(() => {
        async function getEmployeeById() {
            const employee = await getEmployee(companyId, employeeId);
            setEmployee(employee);
            // console.log(company)
        }
        getEmployeeById();
    }, []);

    return (
        <section className='dashboard-home'>
            {employee ? (
                <div className="add-employee">
                    <h1 className='add-title'>Edit Employee</h1>
                    <EditEmployeeForm companyId={companyId} employee={employee} setEmployee={setEmployee} />
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </section>
    )
}