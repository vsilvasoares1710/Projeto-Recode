import axios from "axios";
export default function getFiltros() {
  try {
    return axios.get("/filtros").then(response => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
    return null
  }
}
