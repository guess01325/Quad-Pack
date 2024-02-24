import { useState, useEffect } from "react";
import {  useNavigate, useParams, Outlet, useOutletContext } from "react-router-dom";
import {
  getAllLuggageItems,
  postLuggage,
  putLuggage,
  deleteLuggage,
  getOneLuggage,
} from "../services/luggages";


export default function LuggageContainer(props) {
  const [luggage, setLuggage] = useState([]);
  // const [eventLuggage, setEventLuggage] = useState([]);
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const { eventId } = params;
  const [ events] = useOutletContext();

  console.log(luggage)

  useEffect(() => {
    const event = events.find((eventItem) => eventItem.id === Number(eventId));
    setEvent(event);
  }, [events, eventId]);

  useEffect(() => {
    const fetchLuggage = async () => {
      const luggage = await getAllLuggageItems(eventId);
      setLuggage(luggage);
    };
    if (event) {
      fetchLuggage();
    }
  }, [event, eventId]);

  const handleCreateLuggage = async (formData) => {
    const luggageItem = await postLuggage(eventId, formData);
    setLuggage((prevState) => [...prevState, luggageItem]);
    // navigate(`/events/${event.id}/luggages`);
  };

  const handleUpdateLuggage = async (id, formData) => {
    const luggageItem = await putLuggage(id, formData);
    setLuggage((prevState) =>
      prevState.map((luggage) => {
        return luggage.id === Number(id) ? luggageItem : luggage;
      })
    );
    // navigate(`/events/${event.id}/luggages`);
  };

  const handleDeleteLuggage = async (id) => {
    await deleteLuggage(id);
    setLuggage((prevState) => prevState.filter((luggage) => luggage.id !== id));
  };
console.log(luggage)
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
