import api from "./fixhubAPI";
export default function logar(dados) {
    return api.post("/profissionais/entrar", dados).then(response => {
      console.log(response)
      return response;
    }).catch( error => {
      return error.response
    });
}
