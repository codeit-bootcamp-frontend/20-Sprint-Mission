import axios from "axios";

export const api = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
});
