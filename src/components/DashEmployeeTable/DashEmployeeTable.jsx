import './DashEmployeeTable.css';

export default function DashEmployeeTable({ employees }) {


  return (
    <div className="employee-container">
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td> {employee.companyName} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

