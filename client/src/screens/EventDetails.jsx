import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./EventDetails.css";

export default function EventDetail(props) {
  const [luggage, setLuggage] = useState([]);

  const history = useHistory();
  const { eventId } = useParams();

  useEffect(() => {
    if (props.luggage) {
      setLuggage(props.luggage);
    }
  }, [props.luggage]);

  return (
    <div className="event-details-container">
      <div className="event-detail-border">
        {props.luggage.map((eventLuggage) => (
          <div className="luggage" key={eventLuggage.id}>
            <p>{`${eventLuggage.name} ${eventLuggage.amount}`}</p>

            <button onClick={() => props.handleDeleteLuggage(eventLuggage.id)}>
              Delete
            </button>

            <Link to={`/events/${eventId}/luggage/${eventLuggage.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to={`/events/${eventId}/luggage/create`}>
        <button>Add to Luggage</button>
      </Link>
    </div>
  );
}
