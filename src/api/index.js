import axios from './ajax'
export const reqGetCategoryList = () => {
  return axios({
    url: "/tablist",
    method: "GET"
  });
};

export const reqCategoryNav = () => {
  return axios({
    method: 'GET',
    url: '/cagetorynav',
  })
}