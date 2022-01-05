import React from "react";
import "./Question.css";
import Headericon from "../Home/Headericon.js";

export default function Question() {
  const [colapseone, setcolapseone] = React.useState(false);
  const [colapseonetoone, setcolapseonetoone] = React.useState(false);
  const [colapseonetotwo, setcolapseonetotwo] = React.useState(false);
  const [colapseonetothree, setcolapseonetothree] = React.useState(false);
  const [colapseonetofour, setcolapseonetofour] = React.useState(false);

  return (
    <div className="container-question-page">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text-2">سوالات متداول </h1>
      </div>

      <div className="parent-container-colapse-1">
        <div className="container-colapse-1">
          <button
            className="colapse-hide"
            onClick={() => setcolapseone((prevState) => !prevState)}
          >
            بیت برگ
            <div
              className="hide-side-features"
              style={{
                position: "absolute",
                top: 50,
                left: 0,
                width: "100%",
                height: colapseone ? 400 : 0,
                background: "white",
                overflow: "hidden",
                transition: "height 500ms",
              }}
            >
              <div className="container-colapse-1-1">
                <div
                  className="btn-colapse-1-1"
                  onClick={(e) =>
                    setcolapseonetoone((prevState) => !prevState)(
                      e.stopPropagation()
                    )
                  }
                >
                  بیت برگ جیست؟
                </div>
                <div
                  className="hide-colapse-1-1"
                  style={{
                    position: "absolute",
                    top: 50,
                    left: 0,
                    width: "100%",
                    height: colapseonetoone ? 19 : 0,

                    background: "white",
                    overflow: "hidden",
                    transition: "height 500ms",
                  }}
                >
                  <div className="dis-hide-colapse-1-1">
                    {" "}
                    بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که از
                    سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای خرید و
                    فروش ارزهای دیجیتال شروع به کار کرده است.
                  </div>
                </div>
              </div>
              <div className="container-colapse-1-2">
                <div
                  className="btn-colapse-1-2"
                  onClick={(w) =>
                    setcolapseonetotwo((prevState) => !prevState)(
                      w.stopPropagation()
                    )
                  }
                >
                  بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                </div>
                <div
                  className="hide-colapse-1-2"
                  style={{
                    position: "absolute",
                    top: 80,
                    left: 0,
                    width: "100%",
                    height: colapseonetotwo ? 120 : 0,

                    background: "white",
                    overflow: "hidden",
                    transition: "height 500ms",
                  }}
                >
                  <div className="dis-hide-colapse-1-2">
                    خرید و فروش انواع ارزهای دیجیتال
                    <br />
                    ارائه حواله های دانشجویی خرد و کلان در قالب Crypto Currency
                    Transfer
                    <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                    <br />
                    ارائه بستری برای طرح سوال و گفتگو با سایر کاربران پیرامون
                    ارزهای دیجیتال
                    <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و آنلاین
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
