import { useState, useEffect } from "react";
import { Routes, useNavigate, useParams, Route, Outlet, useOutletContext } from "react-router-dom";
import {
  getAllLuggageItems,
  postLuggage,
  putLuggage,
  deleteLuggage,
  getOneLuggage,
} from "../services/luggages";

export default function LuggageContainer(props) {
  const [events] = useOutletContext()
  const [luggage, setLuggage] = useState([]);
  const [eventLuggage, setEventLuggage] = useState([]);
  const [event, setEvent] = useState(null);
    const history = useHistory();
  const params = useParams();
  const { eventId } = params;

  useEffect(() => {
    const event = events.find((eventItem) => eventItem.id === Number(eventId));
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

  return (
    <div>
      <Switch>
        <Route path="/events/:eventId/luggage/create">
          <LuggageCreate
            luggage={luggage}
            handleCreateLuggage={handleCreateLuggage}
          />
        </Route>
        <Route path="/events/:eventId/luggage/:id/edit">
          <LuggageEdit
            luggage={luggage}
            handleUpdateLuggage={handleUpdateLuggage}
          />
        </Route>
        <Route path="/events/:eventId/luggages">
          <EventLuggage
            event={event}
            luggage={luggage}
            getAllLuggageItems={getAllLuggageItems}
            handleDeleteLuggage={handleDeleteLuggage}
            getOneLuggage={getOneLuggage}
          />
        </Route>
      </Switch>
    </div>
  );
}
