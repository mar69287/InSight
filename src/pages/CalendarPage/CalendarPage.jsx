import { useState, useEffect, useRef } from 'react'
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { createEvent, getEvents, deleteEvent } from '../../utilities/events-api'
import './CalendarPage.css';

export default function CalendarPage({ user }) {
    const [currentEvents, setCurrentEvents] = useState([]);
    const calendarRef = useRef();

    useEffect(() => {
        async function getAllEvents() {
            const events = await getEvents();
            setCurrentEvents(events);
            events.forEach(event => {
                calendarApi.addEvent({
                    title: event.title,
                    start: event.start,
                    end: event.end
                });
            });
        }
        const calendarApi = calendarRef.current.getApi();
        getAllEvents();
    }, []);

    const handleDateClick = async (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                title,
                start: selected.startStr,
                end: selected.endStr,
            });
            try {

                const event = await createEvent({
                    title,
                    start: selected.startStr,
                    end: selected.endStr,
                    user: user._id
                })
                setCurrentEvents(updatedEvents => [...updatedEvents, event])
            } catch (error) {
                console.error(error);
            }
        }
    };


    const handleEventClick = async (selected) => {
        console.log(selected.event)
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();

        }
    };

    const handleDeleteEvent = async (eventId) => {
        if (window.confirm(`Are you sure you want to delete the event?`)) {

            await deleteEvent(eventId);
            setCurrentEvents(currentEvents.filter(event => event._id !== eventId));

        }
    }

    return (
        <section className='content-container flex-row'>

            <div className="calendar-container">

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
                                            timeZone: 'UTC'
                                        }).format(new Date(event.start))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='calendar' >
                    <FullCalendar
                        // height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        ref={calendarRef}
                        timeZone="UTC"
                    />
                </div>
            </div>

        </section >
    )
}
