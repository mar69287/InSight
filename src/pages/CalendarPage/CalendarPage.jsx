import { useState, useEffect } from 'react'
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import './CalendarPage.css';

export default function CalendarPage() {
    const [currentEvents, setCurrentEvents] = useState([]);

    return (
        <section className='dashboard-home'>
            <div className="dash-container">

            </div>
        </section>
    )
}