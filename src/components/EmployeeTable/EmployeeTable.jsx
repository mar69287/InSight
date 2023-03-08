import './EmployeeTable.css';

export default function EmployeeTable({ company }) {
  return (
    <div className="employee-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Hire Date</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {company.employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

