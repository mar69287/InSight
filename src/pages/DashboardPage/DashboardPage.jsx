// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SalesBarChart from '../../components/SalesBarChart/SalesBarChart'
import RevenueBarChart from '../../components/RevenueBarChart/RevenueBarChart'
import DashEmployeeTable from '../../components/DashEmployeeTable/DashEmployeeTable'
import Events from '../../components/Events/Events'
import { getCompanies } from '../../utilities/companies-api'
import { getEvents } from '../../utilities/events-api'
import './DashboardPage.css';

export default function DashboardPage() {
    const [companies, setCompanies] = useState([]);
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalInventory, setTotalInventory] = useState(0);
    const [allEmployees, setAllEmployees] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getAll() {
            const companies = await getCompanies();
            setCompanies(companies);
            const events = await getEvents();
            setEvents(events);

            let totalEmployees = 0;
            let totalSales = 0;
            let totalRevenue = 0;
            let totalOrders = 0;
            let totalInventory = 0;
            let allEmployees = []

            for (const company of companies) {
                totalEmployees += company.employees.length;
                totalSales += company.sales || 0;
                totalRevenue += company.revenue || 0;
                totalOrders += company.orders || 0;
                totalInventory += company.inventory || 0;
                allEmployees.push(...company.employees.map((employee) => ({
                    ...employee,
                    companyName: company.name
                })));
            }

            setTotalEmployees(totalEmployees);
            setTotalSales(totalSales);
            setTotalRevenue(totalRevenue);
            setTotalOrders(totalOrders);
            setTotalInventory(totalInventory);
            setAllEmployees(allEmployees);

        }

        getAll();
    }, []);

    return (
        <section className='dashboard-home'>
            <div className="dash-container">
                <div className="money">
                    <div className="sales">
                        <h1>{companies.length}</h1>
                        <p>Companies</p>
                    </div>
                    <div className="sales">
                        <h1>{totalEmployees}</h1>
                        <p>Employees</p>
                    </div>
                    <div className="orders">
                        <h1>{totalOrders}</h1>
                        <p>Online Orders</p>
                    </div>
                </div>
                <div className="money">
                    <div className="sales">
                        <h1>{`$${totalSales}`}</h1>
                        <p>Sales</p>
                    </div>
                    <div className="revenue">
                        <h1>{`$${totalRevenue}`}</h1>
                        <p>Revenue</p>
                    </div>
                    <div className="inventory">
                        <h1>{totalInventory}</h1>
                        <p>Inventory</p>
                    </div>
                </div>
                <section className="graphs">
                    <div className="graph-container">
                        <h1>Revenue Report</h1>
                        <RevenueBarChart />
                    </div>
                    <div className="graph-container">
                        <h1>Sales Report</h1>
                        <SalesBarChart />
                    </div>
                </section>
                <div>
                    <DashEmployeeTable employees={allEmployees} />
                    <Events events={events} />
                </div>
            </div>
        </section>
    )
}