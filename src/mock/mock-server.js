// 引入Mock
import Mock from "mockjs";
// 引入data数据
import data from "./datas/index.json";
import dataNav from './datas/cateNavDatas.json'
import policyDescList from './datas/index.json'
import categoryHotSellModule from './datas/index.json'
import flashSaleModule from './datas/index.json'
import login from './datas/login.json'

// 拦截地址,产生数据
Mock.mock("/login",{code:0,data:login})
Mock.mock("/tablist", { code: 0, data: data });
Mock.mock("/cagetorynav", { code: 0, data: dataNav.categoryL1List});
Mock.mock("/policyDescList", { code: 0, data: policyDescList.policyDescList});
Mock.mock("/categoryHotSellModule", { code: 0, data: categoryHotSellModule.categoryHotSellModule});
Mock.mock("/flashSaleModule", { code: 0,data: flashSaleModule.flashSaleModule});

