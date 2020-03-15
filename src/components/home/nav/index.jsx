import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.less";
@connect(state => ({data:state}),null)
class Nav extends Component {
  render() {
    if (this.props.data.NavList.kingKongModule) {
      var tabListData = this.props.data.NavList.kingKongModule.kingKongList;
    }
    return (
      <div className="kingkongCarousel">
        <ul className="kingkongCarousel_ul">
          {tabListData
            ? tabListData.map(
                (item, index) => {
                  return (
                    <li className="kingkong_item" key={index}>
                      <img src={item.picUrl} alt="" />
                      <span>{item.text}</span>
                    </li>
                  );
                }
              )
            : ""}
        </ul>
      </div>
    );
  }
}
export default Nav;
