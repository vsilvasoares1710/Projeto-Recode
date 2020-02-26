import api from "./fixhubAPI";
import isAuthenticated from "./userAuthentication"
const token = JSON.parse(localStorage.getItem("token"))
export default function apiAtualizaçãoCadastro(dados) {
  if(isAuthenticated()) {
    return api.put("/profissionais", dados, { headers: { authorization: token}}).then(response => {
      console.log(response)
      return response;
    }).catch( error => {
      console.log(error)
      return error.response
    });
  } else {

    return null
  }
}
