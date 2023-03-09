// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditEmployeeForm from '../../components/EditEmployeeForm/EditEmployeeForm'
import './EditEmployeePage.css'

export default function EditEmployeePage() {
    const { companyId, employeeId } = useParams();

    return (
        <section className='dashboard-home'>
            <div className="add-employee">
                <h1 className='add-title'>Edit Employee</h1>
                <EditEmployeeForm companyId={companyId} employeeId={employeeId} />
            </div>
        </section>
    )
}