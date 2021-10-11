import { useHistory, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents, postEvent, putEvent  } from "../services/events";
import Events from "../screens/Events"
import EventDetails from "../screens/EventDetails"
import LuggageContainer from "./LuggageContainer";
import './MainContainer.css'

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  const [luggage, setLuggage] = useState([]);

  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

 

  return ( 
    <div className="main-container">

      <h1>The Quad Pack</h1>

      <Switch>
        
        <Route path="/events/:id">
         <LuggageContainer events={events} />
        </Route>

        
        <Route path="/events">
         <Events events={events}/>
        </Route>

       
       </Switch>
        

    </div>
 
  )
}


