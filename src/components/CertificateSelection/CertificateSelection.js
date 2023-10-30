import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CertificateSelection.css";
import selection_icon from '../../images/selection_icon.png';
import background_img from '../../images/background.png';

function CertificateSelection(props) {

    const [selectedCert, changeSelectedCert] = React.useState();
    const [selectedName, changeSelectedName] = React.useState('Выберите товар');
    const [isDivVisible, changeVisibilityState] = React.useState(false);
    const [price, changePrice] = React.useState('');
    const navigate = useNavigate();


    function selectСertificate(cert) {
        changeSelectedCert(cert);
        changeSelectedName(cert.NAME);
        changePrice(`Цена - ${cert.SUMMA} р.`);
        changeVisibilityState(false);
    }

    function sendInfo() {
        const cert = selectedCert;
        localStorage.setItem('selectedCert', JSON.stringify(cert));
        navigate('/form', { replace: true });
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
                        <button className={"cert-selection__button" + (selectedCert ? " button" : " disable-button")}
                            disabled={selectedCert ? false : true} onClick={sendInfo}>Оформить</button>
                    </div>
                </div>
                <img className="background-img" src={background_img} alt="Фоновое изображение" />
            </section>
        </>
    )
}


export default CertificateSelection;