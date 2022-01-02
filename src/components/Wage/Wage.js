import React from "react";
import "./Wage.css";
import Headericon from "../Home/Headericon.js";
import Searchicon from "../statics/svg/searchicon";

const rows = [
  {
    id: 0,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 1,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 2,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 3,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 4,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 5,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 6,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
];
export default function Wage() {
  return (
    <div className="container-wage">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text">کارمزد ارزهای دیجیتال</h1>
      </div>
      <div className="parent-container-list-wage">
        <div className="container-list-wage">
          <div className="container-inputs-search">
            <button className="btn-search">جستجو</button>
            <div className="container-input-search">
              <input
                className="input-search"
                type="search"
                placeholder="جستجو بر اساس نام و یا نماد اختصاری"
              />
              <Searchicon />
            </div>
          </div>
          <p className="p-warning-wage">
            کارمزد های خرید همان کارمزد شبکه میباشد که توسط شبکه تعیین میشود و
            بیت برگ هیچ منفعتی در این امر ندارد لازم به ذکر است مرجع تعیین قیمت
            کارمزدها صرافی بین المللی بایننس است
            <p className="p-2-warning-wage">:توجه</p>
          </p>
          <div className="css-1wy2bti">
            <div data-area="left" className="css-1l4iui8 name-td">
              <div className="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Last Price"
                  className="css-1i04fkn"
                >
                  کارمزد فروش
                </div>
              </div>
            </div>
            <div data-area="left" className="css-1l4iui8 buy-price-td">
              <div className="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Last Price"
                  className="css-1i04fkn wage-buy"
                >
                  کارمزد خرید
                </div>
              </div>
            </div>
            <div data-area="left" className="css-1l4iui8 sell-price-td">
              <div className="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Pair"
                  className="css-1i04fkn name-corency-in-list-wage"
                >
                  ارز دیجیتال
                </div>
              </div>
            </div>
            <div data-area="left" className="css-1l4iui8 number-td">
              <div className="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Pair"
                  className="css-1i04fkn sharp-header-list-wage"
                >
                  #
                </div>
              </div>
            </div>
          </div>
          {rows.map((row, index) => (
            <div
              key={row.id}
              className="css-4cffwv lp-currency--row"
              href="https://bitbarg.me/bitcoin"
              data-symbol="BTCUSDT"
            >
              <div className="css-ahynou">
                <div className="number-td-2">1</div>
                <div className="name-td-2">
                  <a className="d-flex" href="https://bitbarg.me/bitcoin">
                    <img className="image-curency" src={row.icon} alt="" />
                    <div className=" container-firs-name-curency">
                      <span className="searchable">
                        {row.namef}
                        <span className=" firs-name-curency">{row.name}</span>
                      </span>
                      <span className="searchablea">{row.name}</span>
                    </div>
                  </a>
                </div>
                <div className="buy-price-td container-Network-curency">
                  <div className="unit-type-2">
                    <span>شبکه</span>
                    <span>{row.networkOne}</span>
                    <div className="price-wage">
                      <span>{row.valueNetworkOne} تومان</span>
                    </div>
                  </div>
                  <div className="unit-type-2">
                    <span>شبکه</span>
                    <span>{row.valueNetworkTwo}</span>
                    <div className="price-wage">
                      <span>{row.networkTwo} تومان</span>
                    </div>
                  </div>
                </div>
                <div className="sell-price-td">
                  <span className="sell-price"></span>
                  <span className="unit-type-free">رایگان</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
