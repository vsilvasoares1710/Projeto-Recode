import api from "./fixhubAPI";
export default function search(route) {
  return api
    .get(route)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Falha na busca por profissionais", error);
      return null;
    });
}
