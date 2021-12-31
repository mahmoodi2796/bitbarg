import "./Header.css"
import about from '../statics/png/about.png';
import bag from '../statics/png/bag.png';
import bitgap from '../statics/png/bitgap.png';
import comment from '../statics/png/comment.png';
import Direction from '../statics/png/Direction.png';
import home from '../statics/png/home.png';
import Identity from '../statics/png/Identity.png';
import Notifications from '../statics/png/Notifications.png';
import opportunity from '../statics/png/opportunity.png';
import order from '../statics/png/order.png';
import price from '../statics/png/price.png';
import question from '../statics/png/question.png';
import Relationship from '../statics/png/Relationship.png';
import Wage from '../statics/png/Wage.png';
import wallet from '../statics/png/wallet.png';
import profile from '../statics/png/profile.png';
import Menu_icon from '../statics/svg/Menu_icon.js';
import React,{useState}from 'react';

export default function Header() {
  const [state, setstate] = useState(false)

    return (
        <div>
            <header>
  <div className="main-navbar">
  <div className="main-navbar-container">



<div onClick={()=>setstate(prevstate=> !prevstate)}>
<Menu_icon/>
</div>



{state && <div className="container-menu-hide">
<div className="row-1-menu-hide">
<a href="/login"><div className="container-order">
<img width="70px" src={order} />
    <div>سفارشات</div>
</div></a>
<a href="/login"><div className="container-profile">
<img width="70px" src={profile} />
    <div>پروفایل</div>
</div> </a>
<a href="/"><div className="container-home">
<img width="70px" src={home} />
    <div>خانه</div>
</div></a>
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
<a href="Authentication"><div className="container-Identity">
<img width="70px" src={Identity} />
    <div>احراز هویت</div>
</div></a>
   
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
   <a className="parent-btn-login" href="/login"><button className="btn-login">ورود</button></a> 
  </div>
  </div>
</header>
        </div>
    )
}
