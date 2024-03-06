import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === 
  "production"
    ? 
    "https://quad-pack-c5c0d8af92f3.herokuapp.com/"
    :
    "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
