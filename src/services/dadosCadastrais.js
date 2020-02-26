import api from "./fixhubAPI";
import isAuthenticated from "./userAuthentication"
const token = JSON.parse(localStorage.getItem("token"))
const id = JSON.parse(localStorage.getItem("id"))

export default function dadosCadastrais() {
    if(isAuthenticated()) {
      return api.post("/profissionais/dadosCadastrais", id, { headers: { authorization: token}}).then(response => {
        console.log(response)
        return response.data;
      }).catch( error => {

        return error.response
      });
    } else {

      return null
    }

}
