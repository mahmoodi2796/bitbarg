import React from "react";
import "./Question.css";
import Headericon from "../Home/Headericon.js";

export default function Question() {
  const [colapseone, setcolapseone] = React.useState(false);
  const [colapseonetoone, setcolapseonetoone] = React.useState(false);
  const [colapseonetotwo, setcolapseonetotwo] = React.useState(false);
  const [colapseonetothree, setcolapseonetothree] = React.useState(false);
  const [colapseonetofour, setcolapseonetofour] = React.useState(false);
  const [colapsefive, setcolapsefive] = React.useState(false);
  const [colapseonetosix, setcolapseonetosix] = React.useState(false);
  const [colapseonetoseven, setcolapseonetoseven] = React.useState(false);
  const [colapseonetoeight, setcolapseonetoeight] = React.useState(false);
  const [colapseonetonine, setcolapseonetonine] = React.useState(false);
  const [colapseonetoten, setcolapseonetoten] = React.useState(false);
  const [colapseonetoeleven, setcolapseonetoeleven] = React.useState(false);
  const [colapseonetotwoelv, setcolapseonetotwoelv] = React.useState(false);
  const [colapseonetothreeteen, setcolapseonetothreeteen] =
    React.useState(false);
  const [colapseonetofourteen, setcolapseonetofourteen] = React.useState(false);
  const [colapseonetofiveteen, setcolapseonetofiveteen] = React.useState(false);
  const [colapseonetosixteen, setcolapseonetosixteen] = React.useState(false);
  const [colapseonetoseventeen, setcolapseonetoseventeen] =
    React.useState(false);
  const [colapseonetoeightteen, setcolapseonetoeightteen] =
    React.useState(false);
  const [colapseonetonineteen, setcolapseonetonineteen] = React.useState(false);
  const [colapseonetotwoenteen, setcolapseonetotwoenteen] =
    React.useState(false);
  const [colapseonetotwoeone, setcolapseonetotwoeone] = React.useState(false);
  const [colapseonetotwoetwo, setcolapseonetotwoetwo] = React.useState(false);
  const [colapseonetotwoethree, setcolapseonetotwoethree] =
    React.useState(false);
  const [colapseonetotwoefour, setcolapseonetotwoefour] = React.useState(false);
  const [colapseonetotwoefive, setcolapseonetotwoefive] = React.useState(false);
  const [colapseonetotwoesix, setcolapseonetotwoesix] = React.useState(false);

  return (
    <div className="container-question-page">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text-2">سوالات متداول </h1>
      </div>
      <div className="container-collapses">
        <div className="accordion">
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span onClick={() => setcolapseone((prevState) => !prevState)}>
                  بیت برگ
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseone ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span onClick={() => setcolapsefive((prevState) => !prevState)}>
                  ثبت نام
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapsefive ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 1s",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span
                        onClick={(e) =>
                          setcolapseonetosix((prevState) => !prevState)(
                            e.stopPropagation()
                          )
                        }
                      >
                        چگونه ثبت نام کنم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetosix ? 125 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        <p>
                          جهت ثبت نام روی دکمه ورود کلیک کنید و شماره تلفن
                          سیمکارتی که بنام خودتون است را وارد نمایید. پس از چند
                          لحظه یک کد ۶ رقمی برای شما پیامک می شود. کد را وارد
                          نمایید و سپس رمز عبور ۸ رقمی که ترکیبی از اعداد و حروف
                          انگلیسی می باشد انتخاب کنید و با وارد کردن نام و نام
                          خانوادگی خود فرایند ثبت نام شما تکمیل می شود.
                          <br />
                          شما هم اکنون می توانید درخواست خرید یا فروش خود را ثبت
                          کنید
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetoseven((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        برای دریافت چه خدماتی نیاز به ثبت نام است؟]
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetoseven ? 400 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                        marginTop: 10,
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        صرفا جهت خرید و فروش ارز دیجیتال ثبت نام نیاز است و سایر
                        خدمات بیت برگ همگی بدون ثبت نام نیز در اختیار شما هستند.
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetoeight((prevState) => !prevState)
                  }
                >
                  احراز هویت
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetoeight ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetonine((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          چگونه احراز هویت کنیم؟{" "}
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetonine ? 250 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 900ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        مدارک و شرایط مورد نیاز برای احراز هویت:
                        <br />
                        ۱- تصویر کارت ملی هوشمند، گواهینامه رانندگی، شناسنامه
                        جدید و یا پاسپورت
                        <br />
                        ۲- ارسال ویدئو چند ثانیه ای از چهره خودتان
                        <br />
                        ۳- مالکیت سیمکارتی که با آن در بیت برگ ثبت نام کردید
                        باید بنام شخص خودتان باشد.
                        <br />
                        ۴-داشتن حداقل سن ۱۸ سال و حداکثر ۶۰ سال
                        <br />
                        ۵-افراد دارای معلولیت های ذهنی و جسمی امکان احراز هویت
                        در بیت برگ را ندارند
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetoten((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        احراز هویت چقدر طول می‌کشد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetoten ? 1500 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 900ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        فرایند احراز هویت توسط کارشناسان بیت برگ، همه روزه از
                        ساعت ۸ صبح تا ۱۶ صورت می‌پذیرد. بدلیل حجم بالای درخواست
                        های احراز هویت از سوی کاربران، لطفا تا تماس کارشناسان
                        بیت برگ شکیبا باشید.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetoeleven((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        اگر موفق به انجام احراز هویت نشوم چه اتفاقی می افتد؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetoeleven ? 1500 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 900ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        در صورتی که کاربری نتواند مدارک هویتی خود را به صورت
                        صحیح ارائه دهد و موفق به انجام احراز هویت نشود، خرید و
                        فروش او پس از گذشت ۱۴ روز از ثبت سفارش کنسل شده و برای
                        عودت وجه نیاز به دستور از سمت مقامات قضایی و انتظامی می
                        باشد.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwoelv((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        شرایط احراز هویت برای اتباع خارجی چیست؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwoelv ? 680 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 900ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        متاسفانه بیت برگ در حال حاضر امکان سرویس دهی به اتباع
                        خارجی را ندارد.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetothreeteen((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        آیا احراز هویت برای فروش هم الزامی‌است؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothreeteen ? 680 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 900ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        بله بنا به دستور پلیس فتا فروش در صرافی های ارز دیجیتال
                        نیاز به احراز هویت است. توجه داشته باشد که فرایند احراز
                        هویت مانند خرید، در صورتی که قبلا احراز هويت نشده باشید،
                        بعد از فروش اول انجام خواهد شد.
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetofourteen((prevState) => !prevState)
                  }
                >
                  خرید
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetofourteen ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetofiveteen((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          چگونه می توانم ارز دیجیتال بخرم؟{" "}
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetofiveteen ? 250 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        <p>
                          - ثبت نام و یا ورود به حساب کاربری
                          <br />
                          - ثبت درخواست خرید
                          <br />
                          - انتخاب شبکه ارز مورد نظر در پیش فاکتور
                          <br />
                          - مطالعه و پذیرش قوانین
                          <br />
                          - ثبت یا انتخاب کارت بانکی
                          <br />
                          - ثبت یا انتخاب آدرس کیف پول ارز مورد نظر
                          <br />
                          - واریز ریال از طریق درگاه بانکی
                          <br />
                          - احراز هویت
                          <br />
                          بیت برگ، در لحظه ارز مورد نظر شما را خریداری میکند و
                          ;پس از احراز هویت در خرید اول و در خرید های بعدی
                          بلافاصله بعد از خریدارز به کیف پول شما منتقل میشود.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetosixteen((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        من از بیت برگ ارز خریدم.چه زمانی ارز به کیف پول من ارسال
                        می‌شود؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetosixteen ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        <p>
                          سامانه پرداخت الکترونیک بیت برگ، در لحظه ارز مورد نظر
                          شما را خریداری میکند و با توجه به دستور مقامات محترم
                          قضایی و انتظامی، خرید اول واریز ارز بعد از تایید احراز
                          هویت در وقت اداری و خرید های بعدی آنی بعد از ثبت سفارش
                          به کیف پول شما ارسال می گردد.
                          <br />
                          پس از خرید می توانید از منوی بیت برگ وارد بخش سفارشات
                          شده و روی سفارش خریدتان کلیک کنید، درفرم سفارشتان زمان
                          واریز ارز را می توانید مشاهده کنید.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetoseventeen((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        آیا امکان استرداد وجه وجود دارد؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetoseventeen ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        بدلیل خودکار بودن سامانه پرداخت الکترونیک بیت برگ امکان
                        استرداد وجه وجود ندارد.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetoeightteen((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        از چه کیف پولی استفاده کنیم!؟{" "}
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetoeightteen ? 680 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        بیت برگ در حال حاضر سرویس کیف پول ارائه نمی دهد اما اگر
                        شما به دنبال یک کیف پول امن، سریع و آسان هستید که تنوع
                        گسترده ای از آلت کوین ها را پشتیبانی کند، کیف پول تراست
                        ولت یکی از گزینه هایی است که با آن می توانید ارزهای
                        دیجیتال را بر روی تلفن همراه خود ذخیره کنید.
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoenteen((prevState) => !prevState)
                  }
                >
                  فروش
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoenteen ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoeone((prevState) => !prevState)
                  }
                >
                  زمان انجام معاملات
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoeone ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoetwo((prevState) => !prevState)
                  }
                >
                  کیف پول
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoetwo ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoethree((prevState) => !prevState)
                  }
                >
                  بیت گپ
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoethree ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoefour((prevState) => !prevState)
                  }
                >
                  اپلیکیشن بیت برگ{" "}
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoefour ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoefive((prevState) => !prevState)
                  }
                >
                  استخراج ارز
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoefive ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="parent-container-colapse-1">
            <div className="container-colapse-1">
              <button className="colapse-hide">
                <span
                  onClick={() =>
                    setcolapseonetotwoesix((prevState) => !prevState)
                  }
                >
                  اعتبار بیت برگ
                </span>
                <div
                  className="hide-side-features"
                  style={{
                    width: "100%",
                    maxHeight: colapseonetotwoesix ? 1000 : 0,
                    background: "white",
                    overflow: "hidden",
                    transition: "max-height 900ms",
                  }}
                >
                  <div className="container-colapse-1-1">
                    <div className="btn-colapse-1-1">
                      <span>
                        <span
                          onClick={(e) =>
                            setcolapseonetoone((prevState) => !prevState)(
                              e.stopPropagation()
                            )
                          }
                        >
                          بیت برگ جیست؟
                        </span>
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-1"
                      style={{
                        margintop: "13px 0px 0px 0px",
                        width: "100%",
                        maxHeight: colapseonetoone ? 25 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-1">
                        {" "}
                        بیت برگ استارتاپی پیشرو در زمینه ارزهای دیجیتال است که
                        از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و سریع برای
                        خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetotwo((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        بیت برگ چه خدماتی به مشتریان ارائه می دهد؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetotwo ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-2">
                        خرید و فروش انواع ارزهای دیجیتال
                        <br />
                        ارائه حواله های دانشجویی خرد و کلان در قالب Crypto
                        Currency Transfer
                        <br /> نمایش قیمت لحظه ای و نمودار ارزهای دیجیتال
                        <br />
                        ارائه بستری برای طرح سوال و گفتگو با سایر کاربران
                        پیرامون ارزهای دیجیتال
                        <br /> پاسخگویی و پشتیبانی ۲۴ ساعته به صورت تلفنی و
                        آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-2">
                      <span
                        onClick={(w) =>
                          setcolapseonetothree((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        مزایای بیت برگ چیست؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetothree ? 150 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        واریز وجه به حساب های بانک آینده، ۱۵ دقیقه بعد از ثبت
                        سفارش فروش (در صورت احراز هویت و تایید شبکه) <br />
                        امنیت و سرعت بالا
                        <br /> پوشش ارزی بالا تحت تمام شبکه ها
                        <br />
                        کاربری ساده و آسان
                        <br /> پشتیبانی ۲۴ ساعته تلفنی و آنلاین
                      </div>
                    </div>
                  </div>
                  <div className="container-colapse-1-2">
                    <div className="btn-colapse-1-3">
                      <span
                        onClick={(w) =>
                          setcolapseonetofour((prevState) => !prevState)(
                            w.stopPropagation()
                          )
                        }
                      >
                        چگونه با بیت برگ تماس بگیریم؟
                      </span>
                    </div>
                    <div
                      className="hide-colapse-1-2"
                      style={{
                        width: "100%",
                        maxHeight: colapseonetofour ? 68 : 0,
                        background: "white",
                        overflow: "hidden",
                        transition: "max-height 500ms",
                      }}
                    >
                      <div className="dis-hide-colapse-1-3">
                        راه ارتباط با بیت برگ:
                        <br /> شماره تماس: ۹۱۰۷۹۶۷۷-۰۲۱
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
