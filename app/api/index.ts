import axios from "axios";
const instense = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});
export default instense;
