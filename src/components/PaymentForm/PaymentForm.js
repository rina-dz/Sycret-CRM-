import React from 'react';
import { Link } from 'react-router-dom';
//import useFormWithValidation from '../../hooks/useFormValidator';
import "./PaymentForm.css";
import background_img from '../../images/background.png';

function PaymentForm(props) {



    return (
        <>
            <section className="payment-form">
                <div className="payment-form__container">
                    <h2 className="payment-form__title">Сертификат на 50000 руб</h2>
                    <form className="payment-form__form">

                        <label className="payment-form__label">ФИО *</label>
                        <input className="payment-form__input" name="name" minLength={2} required placeholder='Введите...' />
                        <span className="payment-form__input-error"></span>

                        <label className="payment-form__label">Телефон *</label>
                        <input className="payment-form__input" type='tel' inputmode="numeric"
                            name="tel" minLength={11} required placeholder="+7 (000) 000-00-00"
                        />
                        <span className="payment-form__input-error"></span>

                        <label className="payment-form__label">Сообщение</label>
                        <textarea className="payment-form__input text-input" name="message" maxLength={320} cols="40"
                            rows="3" placeholder='Введите...' />
                        <span className="payment-form__input-error"></span>

                        <label className="payment-form__label">E-mail *</label>
                        <input className="payment-form__input" type='email' inputmode="email"
                            pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
                            name="email" minLength={2} required placeholder='Введите...' />
                        <span className="payment-form__input-error"></span>

                    </form>
                    <Link className="payment-form__rules-link button" to="https://sycret.ru/">Правила</Link>
                    <div className="payment-form__links">
                        <Link className="payment-form__link button" to="/">Назад</Link>
                        <Link className="payment-form__link button" to="/payment">Перейти к оплате</Link>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default PaymentForm;