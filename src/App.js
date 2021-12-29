import './App.css';
import logo from './components/statics/svg/bitbarg.svg';
import support from './components/statics/png/support.png';
import about from './components/statics/png/about.png';
import bag from './components/statics/png/bag.png';
import bitgap from './components/statics/png/bitgap.png';
import comment from './components/statics/png/comment.png';
import Direction from './components/statics/png/Direction.png';
import home from './components/statics/png/home.png';
import Identity from './components/statics/png/Identity.png';
import Notifications from './components/statics/png/Notifications.png';
import opportunity from './components/statics/png/opportunity.png';
import order from './components/statics/png/order.png';
import price from './components/statics/png/price.png';
import question from './components/statics/png/question.png';
import Relationship from './components/statics/png/Relationship.png';
import Wage from './components/statics/png/Wage.png';
import wallet from './components/statics/png/wallet.png';
import profile from './components/statics/png/profile.png';
import Menu_icon from './components/statics/svg/Menu_icon.js';
import React,{useState}from 'react';

function App() {
  const [state, setstate] = useState(false)

  return (
    <div className="container">
<header>
  <div className="main-navbar">
  <div className="main-navbar-container">



<div onClick={()=>setstate(prevstate=> !prevstate)}>
<Menu_icon/>
</div>



{state && <div className="container-menu-hide">
<div className="row-1-menu-hide">
<div className="container-order">
<img width="70px" src={order} />
    <div>سفارشات</div>
</div>
<div className="container-profile">
<img width="70px" src={profile} />
    <div>پروفایل</div>
</div> 
<div className="container-home">
<img width="70px" src={home} />
    <div>خانه</div>
</div>
</div>
<div className="row-2-menu-hide">
<div className="container-price">
<img width="70px" src={price} />
    <div>قیمت لحظه ای </div>
</div>
   
<div className="container-bitgap">
<img width="70px" src={bitgap} />
    <div>بیت گپ</div>
</div>
<div className="container-Identity">
<img width="70px" src={Identity} />
    <div>احراز هویت</div>
</div>
   
</div>
<div className="row-3-menu-hide">
<div className="container-wallet">
<img width="70px" src={wallet} />
    <div>ساخت کیف پول</div>
</div>
<div className="container-Notifications">
<img width="70px" src={Notifications} />
    <div>به من اطلاع بده!</div>
</div>
<div className="container-Wage">
<img width="70px" src={Wage} />
    <div>کارمزد ها</div>
</div>
</div>
<div className="row-4-menu-hide">
<div className="container-DirectionWage">
<img width="70px" src={Direction} />
    <div>مسیر بیت برگ</div>
</div>
<div className="container-comment">
<img width="70px" src={comment} />
    <div>نظرات کاربران</div>
</div>
<div className="container-question">
<img width="70px" src={question} />
    <div>سوالات متداول</div>
</div>


</div>
<div className="row-5-menu-hide">
<div className="container-opportunity">
<img  width="70px" src={opportunity} />
    <div>قرصت های شفلی </div>
</div>
<div className="container-bag">
<img  width="70px" src={bag} />
    <div>گزارش باگ</div>
</div>
<div className="container-Relationship">
<img  width="70px" src={Relationship} />
    <div>ارتباط با مدیریت</div>
</div>

</div>
  <div className="row-6-menu-hide">

  <div className="container-about">
  <img width="70px" height="70" src={about} />
    <div>درباره ما</div>
</div>

</div>
</div>}
    <button className="btn-login">ورود</button>
  </div>
  </div>
</header>
<div className="container-main">
<div className="logo"><img className="logo-mid-bitbarg" src={logo} /></div>
<div className="cont-inputs">
  <div className="parent-inputs left">
  <input className="select-curency inputs-main" type="text"/>
  <div className="absolute-select-curency"> انتخاب ارز</div>
  </div>
  <div className="parent-inputs center">
    <input className="number-curency inputs-main" type="number"/>
    <div className="absolute-number-curency">واحد</div>

  </div>
  <div className="parent-inputs right">
    <input className="price-curency inputs-main" type="number"/>
    <div className="absolute-price-curency">تومان</div>

  </div>

</div>
<div className="action-container">
  <div className="container-btn-buy-sell">
  <button className="btn-sell"> فروش</button>
  <button className="btn-buy">درخواست خرید</button>
  </div>
</div>
<div className="container-time-work">
  <h2 class="time-work-1"> روز هفته ، ۲۴ ساعت شبانه<span>۷</span>روز</h2>
<h2 class="time-work-2">در خدمت شما هستیم</h2>
<a class="number-phone" href="tel:02191079677"> ۹۱۰۷۹۶۷۷</a>
</div>
</div>
  
  <div className="container-support-fix"><img className="image-support-fix" src={support}/></div>
  
  
    </div>
  );
}
export default App;
