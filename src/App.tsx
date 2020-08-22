import React from 'react';

import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Dashboard />
  </>
);

export default App;
