import axios from "axios";
export default function search(route) {
  return axios
    .get(route)
    .then(response => {
      console.log("Dentro da Função: ", response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      alert("Falha na busca por profissionais");
      return null;
    });
}
