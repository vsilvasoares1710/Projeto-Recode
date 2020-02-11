import api from "./fixhubAPI";
export default function getLocais() {
  try {
    return api.get("/locais").then(response => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
