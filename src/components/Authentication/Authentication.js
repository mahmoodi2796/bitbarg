import React from 'react'
import "./Authentication.css"
import Bitbarglogo from "../statics/svg/Bitbarglogo.svg"
import Exclamation from "../statics/svg/kyc-state-3.svg"
import Header from '../Home/Header';


export default function Login() {
    return (
        
        <div className="container-login">
<Header/>

            <div className="cart-login">
                <div className="container-image-cart-login">
                    <img className="Bitbarglogo" src={Bitbarglogo}/>
                    <img className="Exclamation" src={Exclamation}/>

                </div>
                <p className="text-Authentication">وضعیت احراز هویت نامشخص</p>
                <p className="caption-Authentication">برای مشاهده وضعیت احراز هویت ابتدا وارد حساب کاربری خود شوید.</p>
                <div className="container-inputs-login-Authentication">
                   <a href="/login"> <div className="cont-btn-ligin-Authentication"><button className="btn-Authentication">ورود</button></div></a>
                </div>
            </div>
        </div>
    )
}


