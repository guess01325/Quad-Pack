import { Link } from "react-router-dom";
import EventDetails from "./EventDetails";
import "./Events.css";

export default function Events(props) {
  return (
    <div className="events-container">
      <div className="event-border">
        {props.events.map((event) => (
          <div className="events" key={event.id}>
            <p> {event.date}</p>
            <p>{event.city}</p>
            <p>{event.venue}</p>
            <Link to={`/events/${event.id}/luggages`}>Luggage</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
