import axios from "axios";
export default function getFiltros() {
  try {
    return axios.get("/filtros").then(response => {
      return response.data;
    });
  } catch (error) {
    console.error("Falha no carregamento dos filtros", error);
    return [{ categoria: "Erro", tags: ["errosub1", "errosub2"] }];
  }
}
