import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import PaymentForm from '../PaymentForm/PaymentForm';
import CertificateSelection from '../CertificateSelection/CertificateSelection';
//import NotFound from '../NotFound/NotFound';


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<CertificateSelection

          />} />
          <Route path="/form" element={<PaymentForm

          />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
