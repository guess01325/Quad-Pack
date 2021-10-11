import { Link } from "react-router-dom"
import EventDetails from "./EventDetails"
import "./Events.css"


export default function Events(props) {


return (
<div>
    {props.events.map((event)=>
    <div key={event.id}>
       <p> {event.date}</p> 
       <p>{event.city}</p>
       <p>{event.venue}</p>
      <Link to= {`/events/${event.id}/luggages`}>
      Luggage
      </Link>
     
      
    </div>
    )}
</div>
)
}