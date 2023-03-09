import { Link } from 'react-router-dom';
import RevenueBarChart from '../../components/RevenueBarChart/RevenueBarChart'
// import SalesBarChart from '../../components/SalesBarChart/SalesBarChart'
import './DashboardPage.css';

export default function DashboardPage() {

    return (
        <section className='dashboard-home'>
            <div className="graph-container">
                <h1>Revenue Report</h1>
                <RevenueBarChart />
            </div>
        </section>
    )
}