import api from "./fixhubAPI";
export default function cadastro(dados) {
    return api.post("/profissionais", dados).then(response => {
      console.log(response)
      return response;
    });
}
