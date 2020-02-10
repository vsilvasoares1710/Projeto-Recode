import axios from "axios";
const api = axios.create({
  baseURL: "http://api-fixhub.tk/"
});

export default api;
