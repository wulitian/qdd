import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Ajax {
  private ajax: AxiosInstance;

  constructor() {
    // const url: any = import.meta.env.MODE === "development" ? "/api" : (window as any).config.API_BASE_URL || import.meta.env.VITE_API_BASE_URL
    const url =
      import.meta.env.MODE === "development"
        ? "/api"
        : import.meta.env.VITE_APP_BASE_API;
    this.ajax = axios.create({
      withCredentials: false, // 是否允许浏览器携带cookie
      baseURL: url,
      timeout: 30000,
    });
    // console.log(import.meta.env)
    // 拦截器
    this.ajax.interceptors.request.use(
      (config: any) => {
        const token: any = sessionStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
        // store.commit('SPIN_VISIBLE', true);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  async get(url: any, args?: any, config?: AxiosRequestConfig) {
    config = {
      params: args,
      ...config,
    };
    const r: any = await this.ajax.get(url, config);
    return r.data;
  }
  async post(url: any, args: any, config?: AxiosRequestConfig) {
    config = {
      ...config,
      headers: { "Content-Type": "application/json" },
    };
    const r: any = await this.ajax.post(url, args, config);
    return r.data;
  }
  async put(url: any, args?: any, config?: AxiosRequestConfig) {
    config = {
      ...config,
      headers: { "Content-Type": "application/json" },
    };
    const r: any = await this.ajax.put(url, args, config);
    return r.data;
  }
  async delete(url: any, args?: any, config?: AxiosRequestConfig) {
    config = { ...config, params: args };
    const r: any = await this.ajax.delete(url, config);
    return r.data;
  }
  async request(config: AxiosRequestConfig) {
    const r = await this.ajax.request(config);
    return r.data;
  }
}

export default new Ajax();
