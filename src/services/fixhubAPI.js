import axios from "axios";
const api = axios.create({
  baseURL: "https://api-fixhub.tk/"
});

export default api;

// BaseURL produção: "https://api-fixhub.tk/"
// BaseURL dev: "http://localhost:3000/"