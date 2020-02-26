export default function isAuthenticated() {
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  if (token && id) {
    return true
  } else {
    return false;
  }
}
