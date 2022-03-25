import { httpRequest, ReqType, ResDataType } from "./index";

const api =
  "https://my-json-server.typicode.com/codeoD/jsonplaceholder/profile";

export default {
  getUserInfo() {
    return httpRequest({
      method: ReqType.GET,
      url: api,
      resDataType: ResDataType.json,
    });
  },
};
