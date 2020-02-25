export default function isAuthenticated() {
  const dados = localStorage.getItem("token")
  if (dados) {
    return true
  } else {
    return false;
  }
}
