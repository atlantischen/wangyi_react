import {
  GET_NAV_LIST,
  RECEIVE_CAGEGORYNAV
} from "./action-types";
import {
  reqGetCategoryList,
  reqCategoryNav
} from "../api";
 const getNavList = data => ({ type: GET_NAV_LIST, data: data });
export const getNavListAsync=()=>{
  return dispatch=>{
    return reqGetCategoryList().then(res=>{
      dispatch(getNavList(res.data));
    })
  }
}

 const getCategory = data => ({
   type: RECEIVE_CAGEGORYNAV,
   data: data
 });
 export const getCategoryAsync = () => {
   return dispatch => {
     return reqCategoryNav().then(res => {
       dispatch(getCategory(res.data));
     })
   }
 }
