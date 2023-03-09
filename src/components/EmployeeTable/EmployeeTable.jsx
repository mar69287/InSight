import { Link } from 'react-router-dom'
import { deleteEmployee } from '../../utilities/companies-api'
import './EmployeeTable.css';

export default function EmployeeTable({ company, handleEmployeeDelete }) {

  async function handleDelete(employeeId) {
    await deleteEmployee(company._id, employeeId);
    handleEmployeeDelete();
  }

  return (
    <div className="employee-container">
      <Link to={`/companies/${company._id}/employee`} ><i className="fa-solid fa-ellipsis"></i></Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {company.employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td><Link to={`/companies/${company._id}/employee/${employee._id}/edit`}>Edit</Link></td>
              <td><button onClick={() => handleDelete(employee._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

