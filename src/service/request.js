// 服务
import request from "./config";

function requestServer(apiObj) {
  const requestMap = {};
  Object.keys(apiObj).forEach(alias => {
    let { method, url, config } = apiObj[alias];
    method = method.toUpperCase();
    requestMap[alias] = (dataOrParams = {}, instanceConf = {}) => {
      const keyName = ["PUT", "POST", "PATCH"].includes(method)
        ? "data"
        : "params";
      return request({
        method,
        url: formatUrl(url, dataOrParams),
        // [keyName]: method === 'POST' ? qs.stringify(dataOrParams) : dataOrParams,
        [keyName]: dataOrParams,
        ...Object.assign(config || {}, instanceConf)
      });
    };
  });
  return requestMap;
}

function formatUrl(url, params) {
  if (!params) {
    return url;
  }

  // 查找 {{、}}、或者 {name}，然后进行替换
  // m 是正则中捕获的组 $0，即匹配的整个子串
  // n 是正则中捕获的组 $1，即 () 中的内容
  // function($0, $1, $2, ...)
  return url.replace(/\{\{|\}\}|\{(\w+)\}/g, function(m, n) {
    if (m === "{{") {
      return "{";
    }
    if (m === "}}") {
      return "}";
    }

    return params[n];
  });
}
export default requestServer;
