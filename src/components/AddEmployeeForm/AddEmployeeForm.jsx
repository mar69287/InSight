import { useState } from 'react';
import { createEmployee } from '../../utilities/companies-api'
import { useNavigate } from "react-router-dom";

export default function AddEmployeeForm({ companyId }) {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    position: '',
  })
  const navigate = useNavigate()

  const handleAddEmployee = async (evt) => {
    evt.preventDefault();
    try {
      const employee = await createEmployee(companyId, {
        name: newEmployee.name,
        email: newEmployee.email,
        position: newEmployee.position,
      });
      setNewEmployee({
        name: '',
        email: '',
        hireDate: '',
        position: '',
      });
      navigate(`/companies/${companyId}`);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(evt) {
    const newFormData = {
      ...newEmployee,
      [evt.target.name]: evt.target.value
    };
    setNewEmployee(newFormData);
  }

  return (
    <div>
      <div className="form-container">
        <h1 className='add-title'>Add Employee</h1>
        <form autoComplete="off" onSubmit={handleAddEmployee}>
          <label>Employee Name</label>
          <input type="text" name="name" value={newEmployee.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="text" name="email" value={newEmployee.email} onChange={handleChange} required />
          <label>Position</label>
          <input type="text" name="position" value={newEmployee.position} onChange={handleChange} required />
          <button type="submit">ADD EMPLOYEE</button>
        </form>
      </div>
    </div>
  );
}