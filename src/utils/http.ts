import axios from "axios";

const configs = {
  baseURL: "https://my-json-server.typicode.com",
};

const http = axios.create(configs);

export default http;
