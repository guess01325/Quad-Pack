import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents, postEvent, putEvent } from "../services/events";
import Events from "../screens/Events";
import EventLuggage from "../screens/EventLuggage";
import LuggageContainer from "./LuggageContainer";
import "../assets/MainContainer.css";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  

  const navigate = useNavigate();

  const { currentUser } = props;

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  return (
    <>
    
    <div className="main-container">
      
    </div>


    <div className="loggged-in-content">
    
    </div>
    </>
  );
}
