import axios from "axios";

export const hadithAPI = axios.create({
  baseURL: "https://hadis-api-id.vercel.app",
});
