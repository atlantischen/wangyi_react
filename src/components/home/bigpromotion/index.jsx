import React, { Component } from 'react'
import './index.less'

export default class BigPromotion extends Component {
  render() {
    return (
      <div className="BigPromotion">
        <div className="BigPromotionTop">
          <a href="#/">
            <div className="image">
              <img
                src="https://yanxuan-item.nosdn.127.net/b185affb7b7f74810d37d6bdf56925fa.png?imageView&thumbnail=168x0&quality=75"
                alt=""
              />
            </div>
          </a>
        </div>
        <div className="BigPromotionBottom">
          <div className="BigPromotionBottom_top">
            <a href="#/"></a>
            <a href="#/"></a>
          </div>
          <div className="BigPromotionBottom_bottom">
            <div className="BigPromotionBottom_bottom_item">
              <span>48H限时购</span>
              <span>女王专属7折起</span>
              <img
                src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160"
                alt=""
              />
            </div>
            <div className="BigPromotionBottom_bottom_item">
              <span>48H限时购</span>
              <span>女王专属7折起</span>
              <img
                src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160"
                alt=""
              />
            </div>
            <div className="BigPromotionBottom_bottom_item">
              <span>48H限时购</span>
              <span>女王专属7折起</span>
              <img
                src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
