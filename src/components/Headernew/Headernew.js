import Menu_icon from "../statics/svg/Menu_icon.js";
import "./Headernew.css";
import about from "../statics/png/about.png";
import bag from "../statics/png/bag.png";
import bitgap from "../statics/png/bitgap.png";
import comment from "../statics/png/comment.png";
import Direction from "../statics/png/Direction.png";
import home from "../statics/png/home.png";
import Identity from "../statics/png/Identity.png";
import Notifications from "../statics/png/Notifications.png";
import opportunity from "../statics/png/opportunity.png";
import order from "../statics/png/order.png";
import price from "../statics/png/price.png";
import question from "../statics/png/question.png";
import Relationship from "../statics/png/Relationship.png";
import Wage from "../statics/png/Wage.png";
import wallet from "../statics/png/wallet.png";
import profile from "../statics/png/profile.png";
//libraires

import React, { useState } from "react";

export default function Headernew({ namePage, namePagetwo, namePagethree }) {
  const [state, setstate] = useState(false);

  return (
    <header>
      <div className="container-headernew">
        <div className="main-navbar-headernew">
          <div className="main-navbar-container-headernew">
            <div onClick={() => setstate(!state)}>
              <Menu_icon />
            </div>

            {state && (
              <>
                <div
                  onClick={() => setstate(false)}
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",

                    zIndex: "1",
                  }}
                ></div>
                <div
                  style={{
                    zIndex: "2",
                  }}
                  className="container-menu-hide"
                >
                  <a className="item-hide-menu" href="/login">
                    <div className="container-order">
                      <img width="70px" src={order} />
                      <div>سفارشات</div>
                    </div>
                  </a>

                  <a className="item-hide-menu" href="/login">
                    <div className="container-profile">
                      <img width="70px" src={profile} />
                      <div>پروفایل</div>
                    </div>{" "}
                  </a>
                  {namePage != "landing" && (
                    <a className="item-hide-menu" href="/">
                      <div className="container-home">
                        <img width="70px" src={home} />
                        <div>خانه</div>
                      </div>
                    </a>
                  )}
                  <a href="https://bitbarg.me/live-price">
                    <div className="container-price">
                      <img width="70px" src={price} />
                      <div>قیمت لحظه ای </div>
                    </div>
                  </a>

                  <div className="container-bitgap">
                    <img width="70px" src={bitgap} />
                    <div>بیت گپ</div>
                  </div>
                  {namePagetwo != "mahdi" && (
                    <a className="item-hide-menu" href="Authentication">
                      <div className="container-Identity">
                        <img width="70px" src={Identity} />
                        <div>احراز هویت</div>
                      </div>
                    </a>
                  )}

                  {namePage != "wallet" && (
                    <a href="/Wallet">
                      <div className="container-wallet">
                        <img width="70px" src={wallet} />
                        <div>ساخت کیف پول</div>
                      </div>
                    </a>
                  )}
                  <a className="item-hide-menu" href="/Information">
                    <div className="container-Notifications">
                      <img width="70px" src={Notifications} />
                      <div>به من اطلاع بده!</div>
                    </div>
                  </a>
                  <a className="item-hide-menu" href="/Wage">
                    <div className="container-Wage">
                      <img width="70px" src={Wage} />
                      <div>کارمزد ها</div>
                    </div>
                  </a>
                  <a href="/Direction" className="container-DirectionWage">
                    <img width="70px" src={Direction} />
                    <div>مسیر بیت برگ</div>
                  </a>
                  <div className="container-comment">
                    <img width="70px" src={comment} />
                    <div>نظرات کاربران</div>
                  </div>
                  {namePage != "question" && (
                    <a href="/Question">
                      <div className="container-question">
                        <img width="70px" src={question} />
                        <div>سوالات متداول</div>
                      </div>
                    </a>
                  )}
                  <a href="https://jobinja.ir/companies/bitbarg/jobs">
                    <div className="container-opportunity">
                      <img width="70px" src={opportunity} />
                      <div>قرصت های شفلی </div>
                    </div>
                  </a>
                  {namePage != "bag" && (
                    <a href="/Bag">
                      <div className="container-bag">
                        <img width="70px" src={bag} />
                        <div>گزارش باگ</div>
                      </div>
                    </a>
                  )}
                  <a href="/login">
                    <div className="container-Relationship">
                      <img width="70px" src={Relationship} />
                      <div>ارتباط با مدیریت</div>
                    </div>
                  </a>
                  <div className="container-about">
                    <img width="70px" height="70" src={about} />
                    <div>درباره ما</div>
                  </div>
                </div>
              </>
            )}
            <a className="parent-btn-login-headernew" href="/login">
              <button className="btn-login-headernew">ورود</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
