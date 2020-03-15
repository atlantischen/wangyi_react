import React, { Component } from "react";
import './index.less';
export default class FreshmanModule extends Component {
  render() {
    return (
      <div className="freshmanModule">
        <div className="freshmanModule_title">
          <span>新人专享礼</span>
        </div>
        <div className="freshmanModule_content">
          <div className="freshmanModule_left">
            <div className="content_left">新人专享礼包</div>
            <div className="content_right">
              <img
                src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                alt=""
              />
            </div>
          </div>
          <div className="freshmanModule_right">
            <div className="inner_top">
              <div className="module_top">
                <span className="span1">福利社</span>
                <span className="span2">今日特价</span>
              </div>
              <div className="module_bottom">
                <img
                  src="https://yanxuan-item.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
                <div className="price">
                  <span className="price1">￥15.9</span>
                  <span className="price2">￥17.9</span>
                </div>
              </div>
            </div>
            <div className="inner_bottom">
              <div className="module1">新人拼团</div>
              <div className="module2">1元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
