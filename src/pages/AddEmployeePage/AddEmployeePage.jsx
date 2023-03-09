// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddEmployeeForm from '../../components/AddEmployeeForm/AddEmployeeForm'
import './AddEmployeePage.css'

export default function AddEmployeePage() {
    const { companyId } = useParams();

    return (
        <section className='dashboard-home'>
            <div className="add-employee">
                <h1 className='add-title'>Add Employee</h1>
                <AddEmployeeForm companyId={companyId} />
            </div>
        </section>
    )
}