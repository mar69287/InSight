import './Events.css';

export default function Events({ events }) {

    return (



        <div className='events-container'>
            <h1>Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <div>
                            <div>{event.title}</div>
                            <div>Starts:&nbsp;

                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }).format(new Date(event.start))}
                            </div>
                            {/* <div>Ends:&nbsp;

                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }).format(new Date(event.end))}
                            </div> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>




    )
}