import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Router>

      <GlobalStyles />
    </>
  );
};

export default App;
