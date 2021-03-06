import React from 'react';

import GlobalStyle from './styles/global';
import './styles/fonts.css';

import AppProvider from './hooks';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <Dashboard />
    </AppProvider>
  </>
);

export default App;
