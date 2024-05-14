import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/events";

export const getEvents = async (page) => {
  const { data } = await axios.get(`/?page=${page}&limit=10`);
  return data;
};
