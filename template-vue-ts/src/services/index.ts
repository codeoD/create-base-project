export enum ReqType {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface ReqConfig {
  method: ReqType;
  url: string;
  resDataType?: ResDataType;
  data?: Object;
  headers?: HeadersInit;
  mode?: string; // cors no-cors same-origin
  credentials?: string;
  cache?: string; // default no-store
  redirect?: string; // follow error  manual
  referrer?: string;
  referrerPolicy?: string;
  integrity?: string;
}

export enum ResDataType {
  blob = "blob",
  json = "json",
  text = "text",
  formData = "formData",
  arrayBuffer = "arrayBuffer",
}

export function httpRequest(config: ReqConfig) {
  const { method, url, resDataType = ResDataType.json, data, headers } = config;
  const controller = new AbortController();
  const signal = controller.signal;
  let getResponse = async (): Promise<void | Response> => {
    try {
      let res: Response;
      switch (method) {
        case ReqType.PUT:
        case ReqType.PATCH:
        case ReqType.POST:
          res = await fetch(url, {
            method,
            signal,
            headers,
            body: JSON.stringify(data),
          });
          break;
        case ReqType.DELETE:
        default:
          res = await fetch(url, { method, signal });
          break;
      }
      return res;
    } catch (error) {
      // 统一的错误处理
      if (Object.prototype.toString.call(error) === "[object DOMException]") {
        console.log("用户取消请求");
      } else {
        console.log("遇到错误：", error);
      }
    }
  };
  let execute = async () => {
    const res: Response | void = await getResponse();
    // 仅请求响应在200-299范围内，ok属性才是true
    if (res?.ok) {
      return (res as Response)[resDataType]();
    }
    return Promise.resolve({
      code: -1,
      status: res?.status,
      statusText: res?.statusText,
    });
  };
  return {
    execute,
    abort() {
      controller.abort();
    },
  };
}
