import axios from "axios";

// 65470000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;