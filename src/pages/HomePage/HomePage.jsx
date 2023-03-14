import { Link } from 'react-router-dom';
import './HomePage.css';
import HomeImage from '../../images/project4home-2.jpg'

export default function HomePage() {
    return (
        <>

            <header className='header-home'>
                <div className="title">
                    <h1>Insightful Business <span>Management</span> </h1>
                    <h1>At Your Fingertips</h1>
                </div>
                <Link to="/signup" className="signup">Sign Up</Link>
                {/* <Link to="/about"><img src={HomeImage} alt="" /></Link> */}
                <img src={HomeImage} alt="" />

            </header>
            <section className='home-content'>

                <div className='card'>
                    <h2>Streamlined Management</h2>
                    <p>Easily manage multiple companies in one place with InSight's intuitive interface.</p>
                </div>

                <div className='card'>
                    <h2>Accessible Insights</h2>
                    <p>Get a comprehensive view of your company's performance with detailed revenue, sales, and more.</p>
                </div>

                <div className='card'>
                    <h2>Improved Organization</h2>
                    <p>Stay on top of upcoming events and deadlines with InSight's integrated calendar feature.</p>
                </div>

            </section>

        </>
    )
}