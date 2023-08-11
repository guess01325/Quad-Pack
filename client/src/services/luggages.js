import api from "./api-config";

export const getOneLuggage = async (id) => {
  const resp = await api.get(`/luggages/${id}`);
  return resp.data;
};

export const getAllLuggageItems = async (eventId) => {
  const resp = await api.get(`/events/${eventId}/luggages`);
  return resp.data;
};

export const postLuggage = async (eventId, luggageData) => {
  const resp = await api.post(`/events/${eventId}/luggages`, {
    luggage: luggageData,
  });
  return resp.data;
};

export const putLuggage = async (id, luggageData) => {
  const resp = await api.put(`/luggages/${id}`, { luggage: luggageData });
  return resp.data; 
};

//make into try catch?
export const deleteLuggage = async (id) => {
  const resp = await api.delete(`/luggages/${id}`);
  return resp;
};
