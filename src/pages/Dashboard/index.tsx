import React from 'react';
import Header from '../../components/Header';

import { Container, Feed } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Feed />
    </Container>
  );
};

export default Dashboard;
