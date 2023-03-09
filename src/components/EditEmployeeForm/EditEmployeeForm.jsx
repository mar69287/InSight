import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { updateEmployee } from '../../utilities/companies-api'

export default function EditEmployeeForm({ companyId, employee, setEmployee }) {
  const [editEmployee, setEditEmployee] = useState({
    name: employee.name,
    email: employee.email,
    position: employee.position,
  })
  const navigate = useNavigate()

  const handleEditEmployee = async (evt) => {
    evt.preventDefault();
    try {
      const updatedEmployee = await updateEmployee(companyId, employee._id, {
        name: editEmployee.name,
        email: editEmployee.email,
        position: editEmployee.position,
      });
      setEmployee(updatedEmployee);
      navigate(`/companies/${companyId}`)
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(evt) {
    const newFormData = {
      ...editEmployee,
      [evt.target.name]: evt.target.value
    };
    setEditEmployee(newFormData);
  }


  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleEditEmployee}>
          <label>Employee Name</label>
          <input type="text" name="name" value={editEmployee.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="text" name="email" value={editEmployee.email} onChange={handleChange} required />
          <label>Position</label>
          <input type="text" name="position" value={editEmployee.position} onChange={handleChange} required />

          <button type="submit">Edit Employee</button>
        </form>
      </div>
    </div>
  );
}