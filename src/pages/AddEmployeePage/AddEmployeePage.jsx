// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddEmployeeForm from '../../components/AddEmployeeForm/AddEmployeeForm'
import './AddEmployeePage.css'

export default function AddEmployeePage() {
    const { companyId } = useParams();

    return (
        <section className='content-container center-page'>
            <div className="add-employee">
                <AddEmployeeForm companyId={companyId} />
            </div>
        </section>
    )
}