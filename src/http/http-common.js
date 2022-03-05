import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4047",
  headers: {
    "Content-type": "application/json"
  }
});