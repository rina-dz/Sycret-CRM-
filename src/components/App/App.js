import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import CertificateSelection from '../CertificateSelection/CertificateSelection';
import PaymentForm from '../PaymentForm/PaymentForm';
import PaymentLoading from '../PaymentLoading/PaymentLoading';
import NotFound from '../NotFound/NotFound';
import { newMainApi } from '../../utils/MainApi.js';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [сertificates, addCertificates] = React.useState([]);
  const [selectedCert, changeSelectedCert] = React.useState({});


  React.useEffect(() => {
    newMainApi.getAllSertCertificates()
      .then((res) => {
        addCertificates(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function selectСertificate(cert) {
    changeSelectedCert(cert);
    changeSelectedCert(selectedCert);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<CertificateSelection
            сertificates={сertificates}
            handleSelectСertificate={selectСertificate}
          />} />
          <Route path="/form" element={<PaymentForm
            сertificate={selectedCert}
          />} />
          <Route path="/payment" element={<PaymentLoading />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
