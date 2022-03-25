import { httpRequest, ReqType, ResDataType } from "./index";

const api = "https://jsonplaceholder.typicode.com/posts";
export default {
  getResource(params: number) {
    return httpRequest({
      method: ReqType.GET,
      url: `${api}/${params}`,
      resDataType: ResDataType.json,
    });
  },
  createResource(params: object) {
    return httpRequest({
      method: ReqType.POST,
      url: api,
      data: params,
    });
  },
  deleteResource(params: number) {
    return httpRequest({
      method: ReqType.DELETE,
      url: `${api}/${params}`,
    });
  },
};
