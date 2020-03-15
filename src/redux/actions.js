import { GET_NAV_LIST } from "./action-types";
import { reqGetCategoryList } from "../api";
 const getNavList = data => ({ type: GET_NAV_LIST, data: data });
export const getNavListAsync=()=>{
  return dispatch=>{
    return reqGetCategoryList().then(res=>{
      dispatch(getNavList(res.data));
    })
  }
}
