import React, { Component } from "react";
import { connect } from "react-redux";
import { getNavListAsync } from "../../redux/actions";

import BScroll from "better-scroll";
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.min.css";
import "./index.less";
import Nav from "./nav";
import BigPromotion from "./bigpromotion";
import FreshmanModule from "./freshmanModule";
import HotCategory from "./hotCategory";
import NewModule from "./newModule";
import ShopGuideModule from "./ShopGuideModule";
import Footer from "./footer";
class Home extends Component {
  createRef = React.createRef();
  state = {
    navList: [
      "推荐",
      "居家生活",
      "服饰鞋包",
      "美食酒水",
      "个人清洁",
      "母婴亲子",
      "运动旅游",
      "家电数码",
      "全球特色"
    ],
    currentIndex: 0
  };
  componentDidMount() {
    // better-scroll
    const wrapper = document.querySelector(".linear");
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(wrapper, {
      scrollX: true, //开启横向滚动
      click: true // better-scroll 默认会阻止浏览器的原生 click 事件
    });
    // swiper
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.props.getNavListAsync();
  }
  handleClick = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    const { navList, currentIndex } = this.state;
    return (
      <div className="container">
        <div className="home_header">
          <div className="line">
            <div className="logo"></div>
            <div className="search_ipt">
              <i className="iconfont icon-sousuo"></i>
              <span>搜索商品，共25121款好物</span>
            </div>
            <div className="login_btn">登录</div>
          </div>
          <div className="tabWrap"></div>
        </div>
        <div className="home_nav">
          <div className="linear">
            <ul className="linear_ul">
              {navList.map((item, index) => (
                <li
                  onClick={this.handleClick.bind(this, index)}
                  key={index}
                  className={currentIndex === index ? "active_li" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="toggle">
            <i></i>
          </div>
        </div>
        <div className="home_content">
          <div className="swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://yanxuan.nosdn.127.net/82a579259e2e59d443bc79603230f78f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="policy">
            <ul className="g-grow">
              <li className="item">
                <i></i>
                <span>网易自营品牌</span>
              </li>
              <li className="item">
                <i></i>
                <span>30天无忧退货</span>
              </li>
              <li className="item">
                <i></i>
                <span>48小时快速退款</span>
              </li>
            </ul>
          </div>
          <Nav/>
          <BigPromotion />
          <FreshmanModule />
          <HotCategory />
          <NewModule />
          <ShopGuideModule />
          <Footer />
        </div>
      </div>
    );
  }
}
const AppContainer = connect(
  // 状态数据
  state => ({ data: state }),
  // 更新状态数据的方法
  {
    getNavListAsync
  }
)(Home);
export default AppContainer;
