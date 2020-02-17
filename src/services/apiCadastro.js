import api from "./fixhubAPI";
export default function apiCadastro(dados) {
    return api.post("/profissionais", dados).then(response => {
      console.log(response)
      return response;
    }).catch( error => {
      // for (const key in error) {
      //   if (error.hasOwnProperty(key)) {
      //     console.log("Chave:", key)
      //     console.log("Valor: ", error[key])

      //   }
      // }
      return error.response
    });
}
