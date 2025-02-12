import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-evently.onrender.com",
});

export default api;
