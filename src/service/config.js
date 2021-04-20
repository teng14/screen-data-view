import axios from "axios";
import store from "_STORE_";
// axios 配置
const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/"
      : "http://yapi.xinkincq.com.cn/mock/39",
  timeout: 10000,
  headers: {
    post: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  }
};
axios.defaults = { ...axios.defaults, ...config };
const reqeust = axios.create();

//http request 拦截器
reqeust.interceptors.request.use(
  config => {
    // 写入取消请求token
    config.cancelToken = new axios.CancelToken(cancel => {
      store.commit("Request/pushToken", { cancel });
    });

    config.data = JSON.stringify(config.data);
    // header增加token
    const token = store.state.User && store.state.User.token;
    config.headers = {
      "Content-Type": "application/json"
    };
    if (token) {
      config.headers.WebAuthorization = token;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
//响应拦截器即异常处理
reqeust.interceptors.response.use(
  response => {
    const { data } = response;
    if (data && data.code === 200) {
      return data;
    } else if (data.code === 401) {
      //登录失效
      store.commit("User/setLogout");
    }
    return {
      code: data.code || 3000,
      data: null,
      msg: data.msg || "服务错误"
    };
  },
  error => {
    if (axios.isCancel(error)) {
      // 为了终结promise链 (实际请求不会走到.catch(rej=>{}),这样就不会触发错误提示之类的)
      return new Promise(() => {});
    } else {
      return Promise.reject(error);
    }
  }
);

export default reqeust;
