import axios from './ajax'
export const reqGetCategoryList = () => {
  return axios({
    url: "/tablist",
    method: "GET"
  });
};