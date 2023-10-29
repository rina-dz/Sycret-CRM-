import React from 'react';
import { Link } from 'react-router-dom';
import "./CertificateSelection.css";
import selection_icon from '../../images/selection_icon.png';
import background_img from '../../images/background.png';

function CertificateSelection(props) {

    const [selectedName, changeSelectedName] = React.useState('Выберите товар');
    const [isDivVisible, changeVisibilityState] = React.useState(false);
    const [price, changePrice] = React.useState('Цена - 4500 р.');



    return (
        <>
            <section className="cert-selection">
                <div className="cert-selection__container">
                    <h2 className="cert-selection__title">Выбор сертификата</h2>
                    <div className="cert-selection__selected-cert">
                        <p className="cert-selection__selected-name">{selectedName}</p>
                        <img className="cert-selection__icon button" src={selection_icon} alt="Иконка профиля" onClick={() => { changeVisibilityState(!isDivVisible); }} />
                    </div>
                    <div className={'cert-selection__all-cert' + (isDivVisible ? '' : ' hidden')}>
                        <p className="cert-selection__cert">Сертификат на 50000р</p>
                        <p className="cert-selection__cert">Сертификат на 25000р</p>
                        <p className="cert-selection__cert">Сертификат на 10000р</p>
                        <p className="cert-selection__cert">Сертификат на 30000р</p>
                        <p className="cert-selection__cert">Сертификат на 45000р</p>
                    </div>
                    <div className="cert-selection__links">
                        <h2 className="cert-selection__price">{price}</h2>
                        <Link className="cert-selection__link button" to="/form">Купить</Link>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default CertificateSelection;