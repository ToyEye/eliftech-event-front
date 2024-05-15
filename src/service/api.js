import axios from "axios";

axios.defaults.baseURL = "https://eliftech-event-back.onrender.com/api/events";

export const getEvents = async (page) => {
  const { data } = await axios.get(`/?page=${page}&limit=10`);
  return data;
};

export const addForEvent = async (id, credentials) => {
  const { data } = await axios.post(`/${id}`, credentials);
  return data;
};

export const getEventParticipants = async (id) => {
  const { data } = await axios.get(`/${id}`);
  return data;
};
