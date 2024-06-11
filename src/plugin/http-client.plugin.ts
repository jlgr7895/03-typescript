import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    // const response = await fetch(url);
    // return await response.json();
    const { data } = await axios.get(url);
    return data;
  },
  post: async (url: string, body: string) => {},
  put: async (url: string, body: string) => {},
  delete: async (url: string) => {},
};
