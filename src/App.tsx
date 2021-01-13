import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Global from './styles/Global';
import Context from './Hooks';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Context>
          <Routes />
        </Context>
      </BrowserRouter>
    </>
  );
};

export default App;
