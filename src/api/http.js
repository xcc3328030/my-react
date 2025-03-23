import axios from "axios";

// 创建 axios 实例
const http = axios.create({
  baseURL: "/api", // 基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    "Content-Type": "application/json", // 默认请求头
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，可以在请求头中添加 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权的情况
          console.error("未授权，请重新登录");
          break;
        case 404:
          // 处理资源未找到的情况
          console.error("资源未找到");
          break;
        case 500:
          // 处理服务器错误的情况
          console.error("服务器错误");
          break;
        default:
          console.error("请求失败", error.response.status);
      }
    } else {
      console.error("请求失败", error.message);
    }
    return Promise.reject(error);
  }
);

export default http;
