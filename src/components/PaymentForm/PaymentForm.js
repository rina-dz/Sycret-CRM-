import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PaymentForm.css";
import background_img from '../../images/background.png';

function PaymentForm(props) {

    const [isFormValid, changeValidStatus] = React.useState(false);


    const [formValue, setFormValue] = useState({
        ClientName: '',
        Phone: '',
        Email: ''
    });


    function handleChange(e) {
        const input = e.target
        const { name, value } = input;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function checkValidity(e) {
        const formNode = e.target.form;
        const isValid = formNode.checkValidity();
        if (isValid) {
            changeValidStatus(true);
        } else {
            changeValidStatus(false);
        }
    }

    return (
        <>
            <section className="payment-form">
                <div className="payment-form__container">
                    <h2 className="payment-form__title">Оформление покупки</h2>
                    <form className="payment-form__form" onChange={checkValidity} noValidate>

                        <label className="payment-form__label">ФИО *</label>
                        <input className="payment-form__input" name="ClientName" minLength={2} required placeholder='Введите...'
                            value={formValue.ClientName} onChange={handleChange} />
                        <span className="payment-form__input-error">{}</span>

                        <label className="payment-form__label">Телефон *</label>
                        <input className="payment-form__input" type='tel' inputMode="numeric"
                            name="Phone" minLength={11} required placeholder="+7 (000) 000-00-00"
                            value={formValue.Phone} onChange={handleChange}
                        />
                        <span className="payment-form__input-error">{}</span>

                        <label className="payment-form__label">Сообщение</label>
                        <textarea className="payment-form__input text-input" name="message" maxLength={320} cols="40"
                            rows="3" placeholder='Введите...' />
                        <span className="payment-form__input-error">{}</span>

                        <label className="payment-form__label">E-mail *</label>
                        <input className="payment-form__input" type='email' inputMode="email"
                            pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
                            name="Email" minLength={2} required placeholder='Введите...'
                            value={formValue.Email} onChange={handleChange} />
                        <span className="payment-form__input-error">{}</span>

                    </form>
                    <Link className="payment-form__rules-link button" to="https://sycret.ru/">Правила</Link>
                    <div className="payment-form__links">
                        <Link className="payment-form__link button" to="/">Назад</Link>
                        <Link className={"payment-form__link" + (isFormValid ? ' button' : ' disable-button')} to="/payment">Перейти к оплате</Link>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default PaymentForm;