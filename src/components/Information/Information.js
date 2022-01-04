import React from "react";
import "./Information.css";
import Headericon from "../Home/Headericon.js";

export default function Information() {
  let namePage = "landing";

  return (
    <div style={{ background: "#f2f7f7" }}>
      <Headericon namePage={namePage} />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text">بمن اطلاع بده!</h1>
      </div>
      <div style={{ padding: "0px 20px" }}>
        <div className="parent-container-page-information">
          <div className="container-page-information">
            <div className="container-content-container-page-information">
              <div className="container-image-clock-page-information">
                <img src="https://bitbarg.me/images/reminder.svg" />
              </div>
              <h3 className="text-sevice-page-information">
                سرویس اطلاع رسانی
              </h3>
              <p className="service-massage">
                جهت اطلاع از نوسان قیمت خرید یا فروش ارز دلخواه خود، فرم زیر را
                تکمیل نمایید تا بیت برگ از طریق پیامک شما را در جریان تغییرات
                قرار دهد.
              </p>

              <div className="container-inputs-page0information">
                <div class="col-lg-6 col-sm-6 col-6 currency-select col-xs-6">
                  <select
                    class="notify-currency-select notify-side-select"
                    name="side"
                  >
                    <option value="buy">قیمت خرید</option>
                    <option value="sell">قیمت فروش</option>
                  </select>
                </div>
                <div class="col-lg-6 col-sm-6 col-6 currency-select col-xs-6 relativ">
                  <span
                    data-v-779925ba=""
                    class="input-group-addon currency_wrapper_home customBorderRadius"
                  >
                    <div data-v-779925ba="" class="dropdown">
                      <label>انتخاب ارز</label>
                      <span id="update-icon">
                        <svg>
                          <use xlinkHref="https://bitbarg.me/images/cryptoicons.svg#BTC"></use>
                        </svg>
                      </span>
                      <span class="dropdown-toggle">بیت کوین </span>
                    </div>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-6 col-xs-6">
                  <div class="text-field--group">
                    <input
                      name="alert-price"
                      type="text"
                      id="alert-price"
                      class="input-ui"
                    />
                    <input type="hidden" name="price" value="1414577970" />
                    <label className="absolute-inputs-page-information">
                      تومان
                    </label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-6 currency-select col-xs-6">
                  <select class="notify-currency-select" name="type">
                    <option value="bigger">بیشتر از</option>
                    <option value="smaller">کمتر از</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container-btn-page-information">
              <button class="btn btn-login btn-loading">
                <span>!بمن اطلاع بده</span>
                <div class="spinner" id="factor-loading"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
