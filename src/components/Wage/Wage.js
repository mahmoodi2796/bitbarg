import React from "react";
import "./Wage.css";
import Headericon from "../Home/Headericon.js";
import Searchicon from "../statics/svg/searchicon";

const rows = [
  {
    id: 0,
    namef: "بیت کویین",
    name: "Bitcoin - BTC",
    numbercurenct: "1",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/6c912caf_9517_210428023944.png",
  },
  {
    id: 1,
    namef: "اتریوم",
    name: "Ethereum - ETH",
    numbercurenct: "2",

    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/eth.svg",
  },
  {
    id: 2,
    namef: "بایننس یو اس دی ",
    name: "Binance USD - BUSD",
    numbercurenct: "3",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/busd.svg",
  },
  {
    id: 3,
    namef: "فانتوم",
    name: "Fantom - FTM",
    numbercurenct: "4",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/ftm.png",
  },
  {
    id: 4,
    namef: "کاسموس",
    name: "Cosmos - ATOM",
    numbercurenct: "5",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/atom.svg",
  },
  {
    id: 5,
    namef: "کرو",
    name: "Curve - CRV",
    networkOne: "Bitcoin",
    numbercurenct: "6",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/crv.png",
  },
  {
    id: 6,
    namef: "لونا (ترا) ",
    name: "Terra - LUNA",
    numbercurenct: "7",

    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/luna.svg",
  },
  {
    id: 6,
    namef: "پولکادات ",
    name: "Polkadot - DOT",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    numbercurenct: "8",

    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	  https://abantether.com/eapi/assets/coins/dot.svg",
  },
  {
    id: 6,
    namef: "سندباکس ",
    name: "The Sandbox - SAND",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    numbercurenct: "9",

    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/03331d31_5407_211227171523.png",
  },
  {
    id: 6,
    namef: "آوالانچ ",
    name: "Avalanche - AVAX",
    networkOne: "Bitcoin",
    numbercurenct: "10",
    valueNetworkOne: "711,596",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/avax.png",
  },
  {
    id: 6,
    namef: "ترون",
    name: "Tron - TRX",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "11",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://cdn.bitimen.com/media/asset/logo/md/40b665bd_2910_210301061731.png",
  },
  {
    id: 6,
    namef: "مَتیک ",
    name: "MATIC - MATIC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "12",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/matic.png",
  },
  {
    id: 6,
    namef: "سولانا ",
    name: "Solana - SOL",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "13",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/sol.svg",
  },
  {
    id: 6,
    namef: "شیبا ",
    name: "SHIBA INU - SHIB",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "14",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "  https://abantether.com/eapi/assets/coins/shib.png",
  },
  {
    id: 6,
    namef: "اوآیسیس نتورک ",
    name: "Oasis Network - ROSE",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "15",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/rose.png",
  },
  {
    id: 6,
    namef: "ریپل ",
    name: "Ripple - XRP",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "16",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "  https://abantether.com/eapi/assets/coins/xrp.svg",
  },
  {
    id: 6,
    namef: "گالا ",
    name: "Gala - GALA",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "17",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/gala.png",
  },
  {
    id: 6,
    namef: "کاردانو ",
    name: "Cardano - ADA",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "18",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "		https://cdn.bitimen.com/media/asset/logo/md/c4fc6fe0_3983_210426150916.png",
  },
  {
    id: 6,
    namef: "هارمونی  ",
    name: "Harmony - ONE",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "19",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/one.png",
  },
  {
    id: 6,
    namef: "یرن فایننس ",
    name: "yearn.finance - YFI",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "20",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/yfi.svg",
  },
  {
    id: 6,
    namef: "کرومیا ",
    name: "Chromia - CHR",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "21",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/chr.png",
  },
  {
    id: 6,
    namef: "نیر پروتکل  ",
    name: "NEAR Protocol - NEAR",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "22",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/near.png",
  },
  {
    id: 6,
    namef: "اینترنت کامپیوتر  ",
    name: "Internet Computer - ICP",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "23",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/icp.png  ",
  },
  {
    id: 6,
    namef: " چین لینک",
    name: "ChainLink - LINK",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "24",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/a0511b5d_4214_210202195238.png",
  },
  {
    id: 6,
    namef: "سوایپ",
    name: "Swipe - SXP",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "25",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/sxp.svg",
  },
  {
    id: 6,
    namef: "سوشی ",
    name: "Sushi - SUSHI",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "26",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	  https://bitbarg.me/images/coins/SUSHI.png",
  },
  {
    id: 6,
    namef: "فایل کوین ",
    name: "Filecoin - FIL",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "27",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "		https://abantether.com/eapi/assets/coins/fil.png",
  },
  {
    id: 6,
    namef: " الگوراند  ",
    name: "Algorand - ALGO",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "28",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "  https://abantether.com/eapi/assets/coins/algo.svg",
  },
  {
    id: 6,
    namef: "یو اس دی کوین ",
    name: "USD Coin - USDC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "29",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/usdc.svg",
  },

  {
    id: 6,
    namef: "دوج کوین ",
    name: "DogeCoin - DOGE",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "30",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/doge.svg",
  },
  {
    id: 6,
    namef: "آراگون",
    name: "Aragon - ANT",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "31",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "  https://abantether.com/eapi/assets/coins/ant.svg",
  },
  {
    id: 6,
    namef: "دی‌سنترالند  ",
    name: "Decentraland - MANA",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "32",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/1b50db40_4036_210823173418.png",
  },
  {
    id: 6,
    namef: "ترو یو اس دی   ",
    name: "TrueUSD - TUSD",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "33",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "  https://abantether.com/eapi/assets/coins/tusd.svg",
  },
  {
    id: 6,
    namef: "آکسی اینفینیتی   ",
    name: "Axie Infinity - AXS",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "35",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/axs.png",
  },
  {
    id: 6,
    namef: "کاوا",
    name: "Kava - KAVA",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "36",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/kava.png",
  },
  {
    id: 6,
    namef: "اومیسی گو ",
    name: "OmiseGO - OMG",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "37",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/eed7b64d_7461_210427225756.png",
  },
  {
    id: 6,
    namef: "آوی ",
    name: "Aave - AAVE",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "38",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "	https://abantether.com/eapi/assets/coins/aave.png",
  },
  {
    id: 6,
    namef: "لایت کوین ",
    name: "Litecoin - LTC",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "39",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://cdn.bitimen.com/media/asset/logo/md/97b39e54_6687_210301050451.png",
  },
  {
    id: 6,
    namef: "داسک ",
    name: "DUSK - DUSK",
    networkOne: "Bitcoin",
    valueNetworkOne: "711,596",
    numbercurenct: "40",
    networkTwo: "BEP20",
    valueNetworkTwo: "7,20",
    fee: "رایگان",
    icon: "https://abantether.com/eapi/assets/coins/dusk.png",
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
                <div className="number-td-2">{row.numbercurenct}</div>
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
