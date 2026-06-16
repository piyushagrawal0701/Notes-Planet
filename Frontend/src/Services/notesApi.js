import axios from "axios";

const API = axios.create({
  baseURL: "https://notes-planet.vercel.app/api/notes",
});

export default API;