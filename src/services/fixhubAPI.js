import axios from "axios";
const api = axios.create({
  baseURL: "https://api-fixhub.tk/"
});

export default api;
