import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Header />
    </Container>
  );
};

export default Dashboard;
