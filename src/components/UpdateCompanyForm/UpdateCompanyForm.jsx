import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { updateCompany } from '../../utilities/companies-api'

export default function CreateCompanyForm({ user, company, setCompany }) {
  const [newCompany, setNewCompany] = useState({
    name: company.name,
    revenue: company.revenue,
    sales: company.sales,
    orders: company.orders,
    inventory: company.inventory,
    active: company.active,
  })
  const navigate = useNavigate()

  const handleUpdateCompany = async (evt) => {
    evt.preventDefault();
    try {
      const updatedCompany = await updateCompany(company._id, {
        name: newCompany.name,
        revenue: newCompany.revenue,
        sales: newCompany.sales,
        orders: newCompany.orders,
        inventory: newCompany.inventory,
        active: newCompany.active,
      });
      setCompany(updatedCompany);
      navigate(`/companies/${company._id}`)
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
        <form autoComplete="off" onSubmit={handleUpdateCompany}>
          <label>Company Name</label>
          <input type="text" name="name" value={newCompany.name} onChange={handleChange} required />
          <label>Total Revenue</label>
          <input type="number" name="revenue" value={newCompany.revenue} onChange={handleChange} required />
          <label>Total Sales</label>
          <input type="number" name="sales" value={newCompany.sales} onChange={handleChange} required />
          <label>Total Inventory</label>
          <input type="number" name="inventory" value={newCompany.inventory} onChange={handleChange} required />
          <label>Total Orders</label>
          <input type="number" name="orders" value={newCompany.orders} onChange={handleChange} required />
          <label>Active</label>
          <input type="checkbox" name="active" checked={newCompany.active} onChange={handleCheckboxChange} />
          <button type="submit">UPDATE COMPANY</button>
        </form>
      </div>
    </div>
  );
}