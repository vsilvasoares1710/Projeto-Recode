import axios from "axios";
export default function getFiltros() {
  return axios
    .get("/filtros")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Falha no carregamento dos filtros", error);
      return null;
    });
}