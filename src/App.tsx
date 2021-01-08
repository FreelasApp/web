import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Global from './styles/Global';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
