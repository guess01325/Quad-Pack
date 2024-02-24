import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents} from "../services/events";
import "../assets/MainContainer.css";


export default function MainContainer(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  return (
  
  


      <div>
        <Outlet
        context={[
          events
        ]}
        />
     
      </div>
  
  );
}
