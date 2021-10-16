import axios from "axios";

export default axios.create({
  baseURL: "https://www.anapioficeandfire.com/api",
  headers: {
    "Content-type": "application/json"
  }
});