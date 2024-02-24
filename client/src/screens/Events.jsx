import {Link, useOutletContext} from "react-router-dom"
// import EventDetails from "./EventDetails";
import "../assets/Events.css";

export default function Events(props) {
  const [events] = useOutletContext();
  console.log(props.events)
  return (
    <div className="events-container">
      <div className="event-border"ds>
        {events.map((event) => (
          <div className="events" key={event.id}>
            <p> {event.date}</p>
            <p>{event.city}</p>
            <p>{event.venue}</p>
            <Link to ={`/events/${event.id}/luggages/all`}>Luggage</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
