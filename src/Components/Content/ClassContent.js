import React, { Component } from 'react';

export default class ClassContent extends Component {
  render() {
    return (
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <a href="#"><i className="fa fa-home" /> Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product-shop spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 order-1 order-lg-2">
                <div className="product-list">
                  <div className="row">
                    {this.renderProductItems()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="partner-logo">
          <div className="container">
            <div className="logo-carousel owl-carousel">
              {this.renderPartnerLogos()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProductItems() {
    const products = [
      { img: "product-1.jpg", sale: true, name: "Pure Pineapple", category: "Towel", price: "₫14.00" },
      { img: "product-2.jpg", sale: false, name: "Guangzhou sweater", category: "Coat", price: "₫13.00" },
      { img: "product-3.jpg", sale: false, name: "Guangzhou sweater", category: "Shoes", price: "₫34.00" },
      { img: "product-4.jpg", sale: false, name: "Microfiber Wool Scarf", category: "Coat", price: "₫64.00" },
      { img: "product-5.jpg", sale: false, name: "Men's Painted Hat", category: "Shoes", price: "₫44.00" },
      { img: "product-6.jpg", sale: false, name: "Converse Shoes", category: "Shoes", price: "₫34.00" },
      { img: "product-7.jpg", sale: true, name: "Pure Pineapple", category: "Towel", price: "₫64.00" },
      { img: "product-8.jpg", sale: false, name: "2 Layer Windbreaker", category: "Coat", price: "₫44.00" },
      { img: "product-9.jpg", sale: false, name: "Converse Shoes", category: "Shoes", price: "₫34.00" }
    ];

    return products.map((product, index) => (
      <div className="col-lg-4 col-sm-6" key={index}>
        <div className="product-item">
          <div className="pi-pic">
            <img src={`img/products/${product.img}`} alt="" />
            {product.sale && <div className="sale pp-sale">Sale</div>}
            <div className="icon">
              <i className="icon_heart_alt" />
            </div>
            <ul>
              <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
              <li className="quick-view"><a href="#">+ Add Cart</a></li>
              <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
            </ul>
          </div>
          <div className="pi-text">
            <div className="catagory-name">{product.category}</div>
            <a href="#"><h5>{product.name}</h5></a>
            <div className="product-price">{product.price}</div>
          </div>
        </div>
      </div>
    ));
  }

  renderPartnerLogos() {
    const logos = [1, 2, 3, 4, 5];
    return logos.map((num, index) => (
      <div className="logo-item" key={index}>
        <div className="tablecell-inner">
          <img src={`img/logo-carousel/logo-${num}.png`} alt="" />
        </div>
      </div>
    ));
  }
}
