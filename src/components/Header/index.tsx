import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <img
        src="https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4"
        alt="user avatar"
      />
    </Container>
  );
};

export default Header;
