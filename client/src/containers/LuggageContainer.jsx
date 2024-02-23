import { useState, useEffect } from "react";
import { Routes, useNavigate, useParams, Route, Outlet } from "react-router";
import {
  getAllLuggageItems,
  postLuggage,
  putLuggage,
  deleteLuggage,
  getOneLuggage,
} from "../services/luggages";


export default function LuggageContainer(props) {
  const [luggage, setLuggage] = useState([]);
  const [eventLuggage, setEventLuggage] = useState([]);
  const [event, setEvent] = useState(null);
  const history = useNavigate();
  const params = useParams();
  const { eventId } = params;

  useEffect(() => {
    const event = props.events.find((eventItem) => eventItem.id === Number(eventId));
    setEvent(event);
  }, [props.events, eventId]);

  useEffect(() => {
    const fetchLuggage = async () => {
      const luggage = await getAllLuggageItems(event.id);
      setLuggage(luggage);
    };
    if (event) {
      fetchLuggage();
    }
  }, [event]);

  const handleCreateLuggage = async (formData) => {
    const luggageItem = await postLuggage(event.id, formData);
    setLuggage((prevState) => [...prevState, luggageItem]);
    history.push(`/events/${event.id}/luggages`);
  };

  const handleUpdateLuggage = async (id, formData) => {
    const luggageItem = await putLuggage(id, formData);
    setLuggage((prevState) =>
      prevState.map((luggage) => {
        return luggage.id === Number(id) ? luggageItem : luggage;
      })
    );
    history.push(`/events/${event.id}/luggages`);
  };

  const handleDeleteLuggage = async (id) => {
    await deleteLuggage(id);
    setLuggage((prevState) => prevState.filter((luggage) => luggage.id !== id));
  };

  return (
    <div>
    
     
    <div className="loggged-in-content">
        <Outlet
        context={[
          event,
          luggage,
          getAllLuggageItems,
          handleDeleteLuggage,
          getOneLuggage,
          handleUpdateLuggage,
          handleCreateLuggage,
          
        ]}
        />
     
      </div>

   

    </div>
  );
}
