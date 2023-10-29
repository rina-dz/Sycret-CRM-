import React from 'react';
import "./PaymentLoading.css";
import { Link } from 'react-router-dom';
import background_img from '../../images/background.png';

function PaymentLoading() {

    return (
        <section className="payment-loading">
            <div className="payment-loading__container">
                <div className='payment-loading__preloader rotating'></div>
                    <h2 className="payment-loading__title">Происходит оплата</h2>
                    <p className="payment-loading__text">Подождите, пожалуйста</p>
                    <Link className="payment-loading__link button" to="/form">Назад</Link>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
        </section>
    )
}

export default PaymentLoading;
