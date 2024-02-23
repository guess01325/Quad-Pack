import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents, postEvent, putEvent } from "../services/events";
import "../assets/MainContainer.css";


export default function MainContainer(props) {
  const [events, setEvents] = useState([]);

  const history = useNavigate();

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


      <div className="loggged-in-content">
        <Outlet
        context={[
          events
        ]}
        />
     
      </div>
        </div>
  
  );
}
