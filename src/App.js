import React, { Component } from "react";
import {
  BrowserRouter as Router, // 引入 BrowserRouter 重命名为 Router
} from "react-router-dom";
import ShopFooter from "./components/shopfooter";
export default class App extends Component {
  render() {
    return (
      <Router>
          <ShopFooter />
      </Router>
    );
  }
}
