import React from 'react';
import { Link } from 'react-router-dom';
import "./CertificateSelection.css";
import selection_icon from '../../images/selection_icon.png';
import background_img from '../../images/background.png';

function CertificateSelection(props) {

    const [selectedCert, changeSelectedCert] = React.useState();
    const [selectedName, changeSelectedName] = React.useState('Выберите товар');
    const [isDivVisible, changeVisibilityState] = React.useState(false);
    const [price, changePrice] = React.useState('');

    function selectСertificate(cert) {
        changeSelectedCert(cert);
        changeSelectedName(cert.NAME);
        changePrice(`Цена - ${cert.SUMMA} р.`);
        props.handleSelectСertificate(cert);
        changeVisibilityState(false);
    }


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
                        {props.сertificates.map((el) => (
                            <p className="cert-selection__cert" key={el.ID} onClick={() => { selectСertificate(el); }}>{el.NAME}</p>
                        ))}
                    </div>
                    <div className="cert-selection__links">
                        <p className="cert-selection__price">{price}</p>
                        <Link className={"cert-selection__link" + (selectedCert ? " button" : " disable-button")} to="/form">Оформить</Link>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default CertificateSelection;