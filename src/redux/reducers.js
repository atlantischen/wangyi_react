import {
  GET_NAV_LIST,
  RECEIVE_CAGEGORYNAV
} from "./action-types";
import {combineReducers} from 'redux'
// reducer函数名称一般和要管理的状态数据的名称一致
// 在reducer中对状态数据进行初始化
const initNavList = {}
function NavList(prevState = initNavList, action) {
  switch (action.type) {
    case GET_NAV_LIST:
      return action.data;
    default:
      return prevState;
  }
}
const initCategoryList =[]
function CategoryList(prevState = initCategoryList, action) {
  switch (action.type) {
    case RECEIVE_CAGEGORYNAV:
      return action.data;
    default:
      return prevState;
  }
}

export default combineReducers(
  {
    NavList,
    CategoryList
  }
)
