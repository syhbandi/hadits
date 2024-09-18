import axios from "axios";

export const hadithAPI = axios.create({
  baseURL: "https://api.hadith.gading.dev",
});
