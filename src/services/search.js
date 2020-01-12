import axios from "axios";
export default function search(route) {
  return axios
    .get(route)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Falha na busca por profissionais", error);
      return null;
    });
}
