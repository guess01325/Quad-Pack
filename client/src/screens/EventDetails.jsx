import { useState,useEffect      } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteLuggage, postLuggage, putLuggage, getOneLuggage } from "../services/luggages";



export default function EventDetail (props){
    const [luggage, setLuggage] = useState([]);
   
    const history = useHistory()
    const {eventId} = useParams()

    useEffect (()=>{
        if (props.luggage){
            setLuggage(props.luggage)
        }
    }, [props.luggage])
    


   








    return (
        <div>
          
            {props.luggage.map((eventLuggage)=>
            (<div key={eventLuggage.id}>
              <p>{eventLuggage.name}</p>
              <p>{eventLuggage.amount}</p>
              <button onClick={()=> props.handleDeleteLuggage(eventLuggage.id)}>Delete</button>

            <Link to={`/events/${eventId}/luggage/${eventLuggage.id}/edit`}><button>Edit</button></Link>
            </div>))}
            <Link to={`/events/${eventId}/luggage/create`}><button>Add to Luggage</button></Link>
        </div>
    )
}