import React, { Component } from 'react'
import  './index.less';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_item">
          <a className="download" href="#/">
            下载APP
          </a>
          <a href="#/">电脑版</a>
        </div>
        <span>网易公司版权所有 © 1997-2020</span>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    );
  }
}
