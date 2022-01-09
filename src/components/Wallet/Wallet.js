import React from "react";
import Headericon from "../Home/Headericon";
import "./Wallet.css";

export default function Wallet() {
  let namePage = "wallet";

  return (
    <div>
      <Headericon namePage={namePage} />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text-2">اموزش ساخت کیف پول</h1>
      </div>
      <div className="parent-container-main-wallet-page">
        <div className="container-main-wallet-page">
          <img
            className="img-header-box-wallet-page"
            src="https://bitbarg.me/uploads/article/dnfAbvyxIna8kK2UU8q8L9XiDWiNtW3bIFO3cEaO.jpeg"
          />
          <div className="row-1-wallet-page">
            <span className="item-left-row-1-wallet-page">۱۸ خرداد ۱۳۹۹</span>
            <div className="item-center-row-1-wallet-page">
              <div className="parent-avatar-item-center-row-1-wallet-page">
                {" "}
                <img
                  className="avatar-item-center-row-1-wallet-page"
                  src="https://bitbarg.me/uploads/article/bWHg89rQncxi49XoyTUc3np8380fqBrmsnlTouv4.jpeg"
                />
              </div>
              <div className="text-item-center-row-1-wallet-page">
                حامد قاسم زاده
              </div>
            </div>
            <div className="item-right-row-1-wallet-page">
              زمان مطالعه: ۵دقیقه
            </div>
          </div>
          <div className="container-main-box-wallet-page">
            <div className="text-1-main-box-wallet-page">
              بیت برگ سرویس کیف پول ارائه نمی‌دهد اما اگر شما به دنبال یک کیف
              پول امن، سریع و آسان هستید که تنوع گسترده‌ای از آلت کوین ها را
              پشتیبانی کند، کیف پول TrustWallet یکی از گزینه‌هایی است که با آن
              می‌توانید ارزهای دیجیتال را بر روی موبایل خود ذخیره کنید، لطفا
              توجه داشته باشید زمان استفاده از کیف پول تراست ولت خود حتما حتما
              از فیلترشکن استفاده نمایید.
            </div>
            <ul className="link-dowload-teust-wallet">
              <li>
                <a
                  className="color-blue"
                  href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
                  rel="noopener"
                  target="_blank"
                >
                  دانلود نسخه اندروید TrustWallet
                </a>
              </li>
              <li>
                <a
                  className="color-blue"
                  href="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409"
                  rel="noopener"
                  target="_blank"
                >
                  دانلود نسخه آیفونی TrustWallet
                </a>
              </li>
              <li>
                <a className="color-blue" href="https://trustwallet.com/dl/apk">
                  دانلود مستقیم نسخه اندروید
                </a>
              </li>
            </ul>
            <div className="text-step-1">
              <h3 className="h3-step-1">گام اول</h3>
              <p className="p-step-1">
                از
                <a
                  href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
                  className="item-appstore"
                >
                  پلی استور
                </a>
                <span>یا</span>
                <a
                  href="https://apps.apple.com/us/app/trust-ethereum-wallet/id1288339409"
                  className="item-appstore"
                >
                  اپ استور
                </a>
                اپلیکیشن trust wallet را دانلود کنید.
              </p>
              <div className="parent-image-step-1">
                <img
                  className="image-step-1"
                  src="https://bitbarg.me/uploads/ckeditor/001_1592400166.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام دوم</h3>
              <p className="p-step-2">
                بر روی دکمه آبی رنگ کلیک کنید تا ساخت کیف را آغاز کنیم
              </p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="https://bitbarg.me/uploads/ckeditor/002_1592400197.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام سوم</h3>
              <p className="p-step-2">
                ۱۲ عبارت بازیابی خود را با دقت یادداشت کنید.
              </p>
              <p className="p-step-2">
                در صورتی که این عبارت را فراموش یا از دست بدهید ارزهای خود را از
                دست خواهید داد و بدون این عبارات هیچ راهی برای بازگرداندن نیست.{" "}
              </p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="	https://bitbarg.me/uploads/ckeditor/003_1592400226.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام چهارم</h3>
              <p className="p-step-2">
                کلماتی را که یادداشت کرده اید به ترتیب انتخاب کنید تا از
                یادداشتتان اطمینان حاصل کنید.{" "}
              </p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="	https://bitbarg.me/uploads/ckeditor/004_1592400251.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام پنجم</h3>
              <p className="p-step-2">اکنون ساخت کیف پول شما نهایی شده.</p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="	https://bitbarg.me/uploads/ckeditor/005_1592400278.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام ششم</h3>
              <p className="p-step-2">
                برای یافتن آدرس کیف پول خود ، روی نماد ارز مورد نظر خود کلیک
                بزنید.
              </p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="	https://bitbarg.me/uploads/ckeditor/006_1592400332.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام هفتم</h3>
              <p className="p-step-2">Receive را کلیک کنید.</p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="	https://bitbarg.me/uploads/ckeditor/007_1592400370.png"
                />
              </div>
            </div>
            <div className="text-step-2">
              <h3 className="h3-step-2">گام هشتم</h3>
              <p className="p-step-2">
                برای ذخیره در کلیپ بورد روی copy کلیک کنید و در زمان خرید در بخش
                کیف پول در بیت برگ ثبت کنید.
              </p>
              <div className="parent-image-step-2">
                <img
                  className="image-step-2"
                  src="https://bitbarg.me/uploads/ckeditor/008_1592400389.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
