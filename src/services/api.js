import axios from "axios";

const api = axios.create({
  baseURL: 'http://177.153.239.114:5859/'
});

export default api;