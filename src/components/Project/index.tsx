import React from 'react';
import { Container } from './styles';

const Project: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <img
            src="https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4"
            alt="user avatar"
          />
          <strong>J-keven</strong>
        </div>
        <span>Aberto</span>
      </header>
      <div>
        <h1>Create an application</h1>
        <strong>Descrição</strong>
        <text>
          We are a young startup from Paris looking for a designer who can help
          us design a tech oriented application. We are open to proposals.
        </text>
        <span />
      </div>
    </Container>
  );
};

export default Project;
