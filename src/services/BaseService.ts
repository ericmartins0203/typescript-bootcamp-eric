import axios, { AxiosInstance } from "axios";

class BaseService {
  private axiosInstance: AxiosInstance;
  private baseURL = "https://mcuapi.herokuapp.com/api/v1";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  getInstance() {
    return this.axiosInstance;
  }
}

export default BaseService;
