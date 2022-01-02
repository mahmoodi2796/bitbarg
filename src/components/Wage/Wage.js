import React from "react";
import "./Wage.css";
import Headericon from "../Home/Headericon.js";
import Searchicon from "../statics/svg/searchicon";

const rows = [
  {
    id: 0,
    name: "mehdi",
    value: 20,
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  //   { id: 1, name: "ali", value: 210 },
  //   { id: 2, name: "moji", value: 30 },
  //   { id: 3, name: "googoli", value: 40 },
  //   { id: 4, name: "magoli", value: 60 },
];
export default function Wage() {
  return (
    <div className="container-wage">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text">کارمزد ارزهای دیجیتال</h1>

        {/* {rows.map((row, index) => (
          <div key={index}>
            <div>{row.name}</div> <div>{row.value}</div>
            <img src={row.icon} />
          </div>
        ))} */}
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

          <div class="css-1wy2bti">
            <div data-area="left" class="css-1l4iui8 name-td">
              <div class="css-lkqrqt">
                <div data-bn-type="text" title="Last Price" class="css-1i04fkn">
                  کارمزد فروش
                </div>
              </div>
            </div>
            <div data-area="left" class="css-1l4iui8 buy-price-td">
              <div class="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Last Price"
                  class="css-1i04fkn wage-buy"
                >
                  کارمزد خرید
                </div>
              </div>
            </div>
            <div data-area="left" class="css-1l4iui8 sell-price-td">
              <div class="css-lkqrqt">
                <div
                  data-bn-type="text"
                  title="Pair"
                  class="css-1i04fkn name-corency-in-list-wage"
                >
                  ارز دیجیتال
                </div>
              </div>
            </div>
            <div data-area="left" class="css-1l4iui8 number-td">
              <div class="css-lkqrqt">
                <div data-bn-type="text" title="Pair" class="css-1i04fkn">
                  #
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
