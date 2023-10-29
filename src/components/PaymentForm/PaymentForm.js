import React from 'react';
import { Link } from 'react-router-dom';
//import useFormWithValidation from '../../hooks/useFormValidator';
import "./PaymentForm.css";

function PaymentForm(props) {

    // const { values, handleChange, handleSubmit, errors, isValid } = useFormWithValidation(props.handleSubmit);
    // <div className="payment-form__container">
    //                 <h2 className="payment-form__title">Редактировать профиль</h2>
    //                 <form className="payment-form__form" onSubmit={handleSubmit}>
    //                     <label className="payment-form__label">Имя</label>
    //                     <input className="payment-form__input" placeholder={props.userName} name="name"
    //                         value={values?.name} onChange={handleChange} minLength={2} required />
    //                     <span className="payment-form__input-error">{errors?.name}</span>
    //                     <label className="payment-form__label">E-mail</label>
    //                     <input className="payment-form__input" placeholder={props.userEmail} type='email'
    //                         pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
    //                         name="email" value={values?.email} onChange={handleChange} minLength={2} required />
    //                     <span className="payment-form__input-error">{errors?.email}</span>
    //                     <button className={isValid ? `payment-form__button payment-form__button-enable button` : 'profile-form__button profile-form__button-disable'} type='submit'>Редактировать</button>
    //                 </form>
    //                 <div className="payment-form__links">
    //                     <Link className="payment-form__link button" to="/profile">Вернуться к профилю</Link>
    //                 </div>
    //             </div>

    return (
        <>
            <section className="payment-form">
                
            </section>
        </>
    )
}


export default PaymentForm;