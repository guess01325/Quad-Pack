// import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useOutletContext } from "react-router-dom";
import "../assets/EventLuggage.css";

export default function EventDetail(props) {
  // const [luggage, setLuggage] = useState([]);
  const [   event,
    luggage,
    getAllLuggageItems,
    handleDeleteLuggage,
    getOneLuggage,
    handleUpdateLuggage,
    handleCreateLuggage,] = useOutletContext();

  const { eventId } = useParams();
  // useEffect(() => {
  //   if (luggage) {
  //     setLuggages(luggage);
  //   }
  // }, [luggage]);

  return (
    <div className="event-details-container">
      <div className="event-detail-border">
        {luggage.map((eventLuggage) => (
          <div className="luggage" key={eventLuggage.id}>
            <p>{`${eventLuggage.name} ${eventLuggage.amount}`}</p>

            <button onClick={() =>handleDeleteLuggage(eventLuggage.id)}>
              Delete
            </button>

            <Link to={`/events/${eventId}/luggages/${eventLuggage.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to ={`/events/${eventId}/luggages/create`}>
        <button>Add to Luggage</button>
      </Link>
    </div>
  );
}
