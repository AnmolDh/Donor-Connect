import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;

export default axios.create({ baseURL: baseURL });
