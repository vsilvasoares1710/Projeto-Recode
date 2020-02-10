import api from "./fixhubAPI";
export default function getFiltros() {
  try {
    return api.get("/filtros").then(response => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
    return null
  }
}
