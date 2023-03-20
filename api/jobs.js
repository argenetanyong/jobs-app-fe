import { mainAxios } from "../configs/axios";

const moduleName = "jobs";

const list = async () => {
  try {
    const res = await mainAxios({
      method: "get",
      url: `${moduleName}`,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export default {
  list,
};
