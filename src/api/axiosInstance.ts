import axios from "axios";

const url = "https://sw-api.starnavi.io";

const instance = axios.create({
  baseURL: url,
  timeout: 1500,
});

export default instance;
