import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategoryAsync } from "../../redux/actions";
import "./index.less";
class Category extends Component {
  state = {
    currentIndex: 0
  };
  componentDidMount() {
    this.props.getCategoryAsync();
  }
  handleClick = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    var categoryLeft = this.props.data.CategoryList;
    const { currentIndex } = this.state;
    const subCateList = categoryLeft[currentIndex];
    return (
      <div className="category_container">
        <div className="header">
          <div className="header_wrapper">
            <i className="iconfont icon-sousuo"></i>
            <span>搜索商品，共23643款好物</span>
          </div>
        </div>
        <div className="content">
          <div className="content_left">
            <ul className="catNav_let">
              {categoryLeft
                ? categoryLeft.map((item, index) => {
                    return (
                      <li
                        className={
                          currentIndex === index
                            ? "catNav_item active"
                            : "catNav_item "
                        }
                        onClick={this.handleClick.bind(this, index)}
                        key={index}
                      >
                        {item.name}
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className="content_right">
            {subCateList ? (
              <div>
                <div className="banner">
                  <img
                    src={
                      subCateList.bannerUrl
                        ? subCateList.bannerUrl
                        : "https://yanxuan.nosdn.127.net/2ac8dde0444ba9b06991c20087d37967.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
                    }
                  />
                </div>
                <ul className="cateList">
                  {subCateList.subCateList
                    ? subCateList.subCateList.map((item, index) => {
                        return (
                          <li className="cateItem" key={index}>
                            <img src={item.bannerUrl} />
                            <span>{item.name}</span>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
const CategoryContainer = connect(
  // 状态数据
  state => ({ data: state }),
  // 更新状态数据的方法
  {
    getCategoryAsync
  }
)(Category);
export default CategoryContainer;
