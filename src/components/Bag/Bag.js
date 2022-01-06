import React from "react";
import "./Bag.css";
import Headericon from "../Home/Headericon.js";
export default function Bag() {
  return (
    <div className="container-bag-page">
      <Headericon />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text-2">گزارش باگ </h1>
      </div>
      <div className="parent-container-main-bag-page">
        <div className="container-image-main-bag-page">
          <img
            className="image-main-bag"
            src="https://bitbarg.me/images/bug-bounty.svg"
          />
        </div>
        <p className="text-1-bag-page">
          در صورت مشاهده باگ یا نقص عملکرد،‌ می‌توانید با گزارش در این فرم ما را
          در حفظ امنیت خرید و اطلاعات کاربران یاری کنید. پس از بررسی گزارش توسط
          تیم مربوطه طبق جدول قیمت گذاری زیر هدیه‌ای جهت قدردانی تقدیم شما خواهد
          شد.
        </p>
        <p style={{ color: "#008000" }} className="text-align-end">
          <span>
            <span>
              <strong>:قوانین</strong>
            </span>
          </span>
        </p>
        <p className="text-2  text-align-end">
          <span>
            ،; DDoS و حملاتی از این قبیل جزو برنامه باگهک های اجتماعی، فیشینگ
            بانتی نیست. از انجام آن ها جدا خودداری کنید.
            <br />
            در صورتی که فعالیت شما باعث اخلال در خدمات کارفرما شود، فعالیت خود
            را متوقف کرده و کارفرما را در جریان قرار دهید.
            <br />
            اطلاعات استخراج شده از سایت یا سرویس کارفرما باید در کمترین میزان
            ممکن باشد، به عنوان مثال هنگام تزریق دیتابیس ردیف های محدودی را
            دریافت کنید.
            <br />
            در صورت کشف باگ، سریعا آن را برای بررسی ارسال کنید و از استخراج
            اطلاعات اضافه پرهیز کنید.
            <br />
            گزارش باگ باید شامل مراحل بازتولید باگ به صورت کاملا شفاف باشد.
            <br />
            پاداش به اولین نفری که آسیب پذیری را گزارش کند تعلق می گیرد.
            <br />
            ارزش گذاری و تعیین سطح خطر آسیب پذیری برعهده ی تیم داوری میباشد.
          </span>
        </p>
        <p className="text-align-end">
          <span>
            <span style={{ color: "#008000" }}>
              <strong>:محدوده کشف آسب پذیری</strong>
            </span>
          </span>
        </p>

        <p className="text-align-end">
          <span>&zwnj; bitbarg.me تمامی آدرس ها و زیر دامنه های</span>
        </p>

        <p className="margin-bottom text-align-end">
          <span>
            <span style={{ color: "#008000" }}>
              <strong>:جوایز کشف آسیب&zwnj;پذیری</strong>
            </span>
          </span>
        </p>
        <div>
          <p dir="ltr" className="Bag-Awards" className="Bag-Awards">
            ارزش باگ های بحرانی{" "}
            <span className="price-bag-awards">8,000,000</span> تومان -
          </p>
          <p dir="ltr" className="Bag-Awards">
            ارزش باگ های خطرناک{" "}
            <span className="price-bag-awards">5,000,000</span>0 تومان -
          </p>
          <p dir="ltr" className="Bag-Awards">
            ارزش باگ های متوسط{" "}
            <span className="price-bag-awards">3,000,000</span> تومان -
          </p>
          <br />
          <p className="text-5-bag-page">
            توسط ارزش باگ های شناسایی شده بر اساس استاندارد امنیتی تیم فنی بیت
            برگ مشخص می گردد CVSS V ۳.۰ باگ ها در سه قالب بحرانی , خطرناک و{" "}
            متوسط طبقه بندی خواهند شد
          </p>
          <br />
        </div>
        <p className="last-text-bag-page text-align-end">
          جهت ثبت گزارش خود، ابتدا وارد حساب کاربری بیت برگ شوید و سپس اینجا را
          کلیک کنید.
        </p>
      </div>
    </div>
  );
}
