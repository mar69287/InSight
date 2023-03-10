import { useState, useEffect, useRef } from 'react'
import { createEvent, getEvents, deleteEvent } from '../../utilities/events-api'
import './CalendarPage.css';

export default function CalendarPage({ user }) {
    const [currentEvents, setCurrentEvents] = useState([]);

    useEffect(() => {
        async function getAllEvents() {
            const events = await getEvents();
            setCurrentEvents(events);
        }
        getAllEvents();
    }, []);


    return (




        <div className='events-container'>
            <h1>Events</h1>
            <ul>
                {currentEvents.map((event) => (
                    <li key={event.id} onClick={() => handleDeleteEvent(event._id, event.title)}>
                        <div>
                            <div>{event.title}</div>
                            <div> When:&nbsp;

                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }).format(new Date(event.start))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>




    )
}