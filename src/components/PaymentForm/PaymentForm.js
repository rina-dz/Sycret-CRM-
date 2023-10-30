import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import "./PaymentForm.css";
import background_img from '../../images/background.png';

function PaymentForm(props) {

    const [isFormValid, changeValidStatus] = React.useState(false);
    const selectedCert = JSON.parse(localStorage.selectedCert);
    const navigate = useNavigate();


    const [formValue, setFormValue] = useState({
        ClientName: '',
        Phone: '',
        Email: ''
    });

    const [formErrors, setFormErrors] = useState({
        ClientName: true,
        Phone: true,
        Message: true,
        Email: true
    });

    function handleChange(e) {
        const input = e.target
        const { name, value } = input;

        setFormValue({
            ...formValue,
            [name]: value
        });

        if (input.name === "Phone") {
            if (input.value.length !== 18) {
                setFormErrors({
                    ...formErrors,
                    Phone: false
                });
            } else {
                setFormErrors({
                    ...formErrors,
                    Phone: true
                });
            }
        } else {
            setFormErrors({
                ...formErrors,
                [name]: input.validity.valid
            });
        }
    }

    function checkValidity(e) {
        const formNode = e.target.form;
        const isValid = formNode.checkValidity();
        if (isValid && formValue.Phone.length === 18) {
            changeValidStatus(true);
        } else {
            changeValidStatus(false);
        }
    }

    function sendInfo() {
        const num = formValue.Phone.replace('+7', "").replace(/ /g, "").replace(/[{()}]/g, '').replace(/_/g, "");
        const info = formValue;
        info.Phone = num
        props.onSubmit(info);
        navigate('/payment', { replace: true });
    }

    return (
        <>
            <section className="payment-form">
                <div className="payment-form__container">
                    <h2 className="payment-form__title">{selectedCert.NAME}</h2>
                    <form className="payment-form__form" onChange={checkValidity} noValidate>

                        <label className="payment-form__label">ФИО *</label>
                        <input className="payment-form__input" name="ClientName" minLength={2} required placeholder='Введите...'
                            value={formValue.ClientName} onChange={handleChange} />
                        <span className={"payment-form__input-error" + (formErrors.ClientName ? " " : " visible")}>ФИО должно быть заполнено</span>

                        <label className="payment-form__label">Телефон *</label>
                        <InputMask className="payment-form__input" type='tel' inputMode="numeric"
                            name="Phone" required placeholder="+7 (000) 000-00-00" alwaysShowMask={true}
                            value={formValue.Phone} onChange={handleChange} mask='+7 (999) 999 99 99' maskChar=""
                        />
                        <span className={"payment-form__input-error" + (formErrors.Phone ? " " : " visible")}>Телефон должен быть заполнен</span>

                        <label className="payment-form__label">Сообщение</label>
                        <textarea className="payment-form__input text-input" name="message" maxLength={320} cols="40"
                            rows="3" placeholder='Введите...' />
                        <span className={"payment-form__input-error" + (formErrors.Message ? " " : " visible")}>Сообщение слишком длинное</span>

                        <label className="payment-form__label">E-mail *</label>
                        <input className="payment-form__input" type='email' inputMode="email"
                            pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
                            name="Email" minLength={2} required placeholder='Введите...'
                            value={formValue.Email} onChange={handleChange} />
                        <span className={"payment-form__input-error" + (formErrors.Email ? " " : " visible")}>Неверный формат почты</span>

                    </form>
                    <Link className="payment-form__rules-link button" to="https://sycret.ru/">Правила</Link>
                    <div className="payment-form__links">
                        <Link className="payment-form__button button" to="/">Назад</Link>
                        <button className={"payment-form__button" + (isFormValid ? ' button' : ' disable-button')}
                            onClick={sendInfo} disabled={isFormValid ? false : true} >Перейти к оплате</button>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default PaymentForm;