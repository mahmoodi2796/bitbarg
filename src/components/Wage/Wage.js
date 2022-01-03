import React, { useState, useEffect } from "react";
import "./Wage.css";
import Headericon from "../Home/Headericon.js";
import Searchicon from "../statics/svg/searchicon";

const rows = [
  {
    id: 0,
    namef: "بیت کویین",
    coin: "btc",
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
  const [pageNumber, setPageNumber] = useState(10);
  const [searchTrem, setSearchTrem] = useState("");
  const [filterData, setFilterData] = useState("");
  const [searchEvent, setSearchEvent] = useState(false);

  useEffect(() => {
    searchTrem
      ? setFilterData(
          rows.filter(
            (item) =>
              item.namef.includes(searchTrem) ||
              item.name.toLowerCase().includes(searchTrem)
          )
        )
      : setFilterData("");
  }, [searchEvent]);
  return (
    <div className="container-wage">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text">کارمزد ارزهای دیجیتال</h1>
      </div>
      <div className="parent-container-list-wage">
        <div className="container-list-wage">
          <div className="container-inputs-search">
            <button
              onClick={() => {
                setSearchEvent(!searchEvent);
              }}
              className="btn-search"
            >
              جستجو
            </button>
            <div className="container-input-search">
              {console.log(searchTrem)}
              <input
                value={searchTrem}
                onChange={(e) => {
                  setSearchTrem(e.target.value);
                }}
                className="input-search"
                type="text"
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
          <div className="css-ahynou-header">
            <span className="wage-sell">کارمزد فروش</span>

            <div className="name-td-3">
              <a className="d-flex" href="https://bitbarg.me/bitcoin">
                <div className=" container-firs-name-curency">
                  <span className="wage-buy">کارمزد خرید</span>
                </div>
              </a>
            </div>
            <div className="buy-price-td-2 ">
              <div className="unit-type-2">
                <span className="curency">ارز دیجیتال</span>
              </div>
            </div>
            <div className="sell-price-td">
              <div className="sharplogo-header-wage">#</div>
            </div>
          </div>
          {searchTrem && !filterData && <div></div>}
          {filterData &&
            filterData.map((row) => (
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

          {!filterData &&
            rows.slice(0, pageNumber).map((row, index) => (
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
                  <div className="sell-price-td-2">
                    <span className="sell-price"></span>
                    <span className="unit-type-free">رایگان</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="parent-pagenation">
        <div
          className="pagenation-1"
          onClick={() => {
            rows.length > pageNumber && setPageNumber(pageNumber + 10);
          }}
        >
          ((بعدی
        </div>{" "}
        <div
          className="pagenation-2"
          onClick={() => {
            pageNumber != 10 && setPageNumber(Number(pageNumber) - 10);
          }}
        >
          قبلی))
        </div>
      </div>
    </div>
  );
}
