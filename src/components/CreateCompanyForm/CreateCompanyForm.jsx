import { useState } from 'react';
import { createCompany } from '../../utilities/companies-api'
import { useNavigate } from "react-router-dom";

export default function CreateCompanyForm({ user, setCompanies }) {
  const [newCompany, setNewCompany] = useState({
    name: '',
    revenue: 0,
    active: false,
  })
  const navigate = useNavigate()

  const handleAddCompany = async (evt) => {
    evt.preventDefault();
    try {
      const company = await createCompany({
        name: newCompany.name,
        user: user._id,
        revenue: newCompany.revenue,
        active: newCompany.active,
      });
      setCompanies(prevCompanies => [...prevCompanies, company]);
      setNewCompany({
        name: '',
        revenue: 0,
        active: false,
      });
      navigate('/companies')
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(evt) {
    const newFormData = {
      ...newCompany,
      [evt.target.name]: evt.target.value
    };
    setNewCompany(newFormData);
  }

  const handleCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    setNewCompany((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleAddCompany}>
          <label>Company Name</label>
          <input type="text" name="name" value={newCompany.name} onChange={handleChange} required />
          <label>Revenue</label>
          <input type="number" name="revenue" value={newCompany.revenue} onChange={handleChange} required />
          <label>Active</label>
          <input type="checkbox" name="active" checked={newCompany.active} onChange={handleCheckboxChange} />
          <button type="submit">CREATE COMPANY</button>
        </form>
      </div>
    </div>
  );
}