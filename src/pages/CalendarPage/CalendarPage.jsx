import { useState, useEffect } from 'react'
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import './CalendarPage.css';

export default function CalendarPage() {
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                title,
                start: selected.startStr,
                end: selected.endStr,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <section className='dashboard-home'>

            <div className="calendar-container">

                <div className='events-container'>
                    <h1>Events</h1>
                    <ul>
                        {currentEvents.map((event) => (
                            <li key={event.id} >
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
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}

                    />
                </div>
                {/* </div> */}
            </div>

        </section >
    )
}