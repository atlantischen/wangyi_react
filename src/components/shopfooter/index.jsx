import React, { Component } from "react";
import { NavLink,Route ,Switch,Redirect} from "react-router-dom";
import Home from "../home";
import Category from "../category";
import Buy from "../buy";
import ShopCart from "../shopcart";
import Profile from "../profile";
import "./index.less";
export default class ShopFooter extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/buy" component={Buy} />
          <Route path="/shopcart" component={ShopCart} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/home" />
        </Switch>
        {/* 底部tabbar */}
        <div className="tabbar">
          <NavLink to="/home" activeClassName="my-active">
            <i className="iconfont icon-Homehomepagemenu"></i>
            <span>首页</span>
          </NavLink>
          <NavLink to="/category" activeClassName="my-active">
            <i className="iconfont icon-fenleishouye"></i>
            <span>分类</span>
          </NavLink>
          <NavLink to="/buy" activeClassName="my-active">
            <i className="iconfont icon-mairu"></i>
            <span>值得买</span>
          </NavLink>
          <NavLink to="/shopcart" activeClassName="my-active">
            <i className="iconfont icon-gouwuche2"></i>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/profile" activeClassName="my-active">
            <i className="iconfont icon-geren"></i>
            <span>个人</span>
          </NavLink>
        </div>
      </div>
    );
  }
}
