import "./Main.css";
import logo from "../statics/svg/bitbarg.svg";

import React from "react";
export default function Main() {
  return (
    <div>
      <div className="container-main">
        <div className="logo">
          <img className="logo-mid-bitbarg" src={logo} />
        </div>
        <div className="cont-inputs">
          <div className="parent-inputs left">
            <input className="select-curency inputs-main" type="text" />
            <div className="absolute-select-curency"> انتخاب ارز</div>
          </div>
          <div className="parent-inputs center">
            <input className="number-curency inputs-main" type="number" />
            <div className="absolute-number-curency">واحد</div>
          </div>
          <div className="parent-inputs right">
            <input className="price-curency inputs-main" type="number" />
            <div className="absolute-price-curency">تومان</div>
          </div>
        </div>
        <div className="action-container">
          <div className="container-btn-buy-sell">
            <button className="btn-sell"> فروش</button>
            <button className="btn-buy">درخواست خرید</button>
          </div>
        </div>
        <div className="container-time-work">
          <h2 className="time-work-1">
            <div
              className="transform-text"
              style={{ position: "absolute", top: 0 }}
            ></div>{" "}
            روز هفته ، ۲۴ ساعت شبانه<span>۷</span>روز
          </h2>
          <h2 className="time-work-2">در خدمت شما هستیم</h2>
          <a className="number-phone" href="tel:02191079677">
            ۹۱۰۷۹۶۷۷
          </a>
        </div>
      </div>
    </div>
  );
}
