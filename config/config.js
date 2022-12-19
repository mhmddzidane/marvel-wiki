// import { getContentType, createHeader } from "@/utils/fetchApi";
import axios from "axios";
import { createHeader, getContentType } from "../utils/fetchApi";

export const apiInstance = axios.create({
  baseURL: process.env.MAIN_BASE_URL,
});

class ApiRequest {
  static request = async (method = "GET", payload = {}) => {
    const contentType = getContentType(payload.type);
    const baseHeaders = { "Content-Type": contentType };
    const headers = createHeader(payload.headers, baseHeaders);
    const url = payload.url;
    const data = payload.body ? payload.body : {};
    const requestObj = { url, headers, method, data };

    try {
      const response = await apiInstance.request(requestObj);
      return response;
    } catch (err) {
      if (err && err.response && err.response.data) {
        throw {
          status: err?.response?.status ?? null,
          err: err?.response?.data ?? "error from server",
        };
      } else if (err && err.response) {
        throw {
          status: err?.status ?? null,
          err: err?.response ?? "error from server",
        };
      } else {
        throw {
          status: null,
          err,
        };
      }
    }
  };

  static get = (payload) => this.request("GET", payload);

  static put = (payload) => this.request("PUT", payload);

  static post = (payload) => this.request("POST", payload);

  static delete = (payload) => this.request("DELETE", payload);

  static patch = (payload) => this.request("PATCH", payload);
}

export default ApiRequest;
