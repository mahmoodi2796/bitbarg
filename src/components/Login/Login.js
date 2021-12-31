import React from 'react'
import "./Login.css"
import loginpng from "../statics/png/login.png"
import Header from '../Home/Header';


export default function Login() {
    return (
        <div className="container-login">
<Header/>

            <div className="cart-login">
                <div className="container-image-cart-login">
                    <img src={loginpng}/>
                </div>
                <p className="text-login">لطفا شماره تلفن خود را وارد نمایید</p>
                <div className="container-inputs-login">
                <div className="cont-input">
                    <input className="input-login" type="text" placeholder="09xxxxxxxxx" />
                    <div className="absolute-input-log-in">شماره تلفن</div>
                </div>
                    <div className="cont-btn-ligin"><button className="btn-next-login">ادامه</button></div>
                </div>
            </div>
        </div>
    )
}
