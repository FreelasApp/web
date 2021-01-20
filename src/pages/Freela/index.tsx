import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
// import Logo from '../../assets/logo.png';
// import Project from '../../components/Project';

import { Container, Header, FreelaContent } from './styles';

const Freela: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button" id="goback">
          <FiArrowLeft size={28} />
          <p>Voltar</p>
        </button>

        <button
          id="user"
          type="button"
          onClick={() => {
            //
          }}
        >
          <strong>Jhonnas Keven</strong>
          <img
            src="https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4"
            alt="user avatar"
          />
        </button>
      </Header>

      <FreelaContent>
        <button
          type="button"
          onClick={() => {
            //
          }}
        >
          <img
            src="https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4"
            alt="user avatar"
          />
          <strong>Iara Caroline</strong>
        </button>
        <h1>Create an application</h1>

        <p>
          We are a young startup from Paris looking for a designer who can help
          us design a tech oriented application. We are open to proposals. You
          can saw our project here: http://www.zotware.com. We are working with
          Figma and Photoshop.
        </p>

        <div className="footer">
          <span>Postado em 30/12/2020</span>
          <p>R$ 4000,00</p>
        </div>

        <div className="categories">
          <span>UX/UI</span>
          <span>DESIGN</span>
          <span>FIGMA</span>
          <span>PHOTOSHOP</span>
        </div>
      </FreelaContent>

      <div className="makeProposal">
        <button type="button">Fazer uma proposta</button>
      </div>
    </Container>
  );
};

export default Freela;
