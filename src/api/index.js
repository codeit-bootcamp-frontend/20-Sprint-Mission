import fetchWrapper from "./fetchWrapper";

export const BASE_URL = "https://panda-market-api.vercel.app";

export const ENDPOINTS = {
  products: `${BASE_URL}/products`,
};

const api = {
  get: (url, options) => fetchWrapper(url, { method: "GET", ...options }),
  post: (url, body, options) =>
    fetchWrapper(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),
  put: (url, body, options) =>
    fetchWrapper(url, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    }),
  delete: (url, options) => fetchWrapper(url, { method: "DELETE", ...options }),
};

export default api;
