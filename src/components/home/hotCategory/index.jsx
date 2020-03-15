import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.less";
@connect(state => ({ data: state }), null)
class HotCategory extends Component {
  render() {
    if (this.props.data.NavList.categoryHotSellModule) {
      var HotCategory = this.props.data.NavList.categoryHotSellModule
        .categoryList;
    }
    return (
      <div className="category">
        <h2 className="category_header">类目热销榜</h2>
        <div className="category_content">
          <div className="content_top">
              {
              HotCategory?HotCategory.slice(1, 3).map((item, index) => {
                  return (
                    <div className="content_top_left" key={index}>
                      <span className="left1">{item.categoryName}</span>
                      <img className="left2" src={item.showPicUrl} alt="" />
                    </div>
                  );
                }):''}
           
          </div>
          <div className="content_bottom">
            <ul>
                {
                HotCategory?HotCategory.slice(3).map((item,index)=>{
                    return (
                      <li key={index}>
                        <span>{item.categoryName}</span>
                        <img
                          src={item.showPicUrl}
                          alt=""
                        />
                      </li>
                    );
                  }):''}
             
              <li>
                <span>美食酒水榜</span>
                <img
                  src="https://yanxuan-item.nosdn.127.net/3bd7a2e27f9ced5f72d9ce4c069c7326.png"
                  alt=""
                />
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default HotCategory;
