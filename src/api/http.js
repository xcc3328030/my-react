import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api', // 根据环境变量设置基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 默认请求头
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
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
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权的情况
          console.error('未授权，请重新登录');
          break;
        case 404:
          // 处理资源未找到的情况
          console.error('资源未找到');
          break;
        case 500:
          // 处理服务器错误的情况
          console.error('服务器错误');
          break;
        default:
          console.error('未知错误');
      }
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export const get = (url, params = {}) => {
  return instance.get(url, { params });
};

// 封装 POST 请求
export const post = (url, data = {}) => {
  return instance.post(url, data);
};

// 封装 PUT 请求
export const put = (url, data = {}) => {
  return instance.put(url, data);
};

// 封装 DELETE 请求
export const del = (url, params = {}) => {
  return instance.delete(url, { params });
};

export default instance;