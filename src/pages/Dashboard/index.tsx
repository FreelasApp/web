import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import Project from '../../components/Project';

import {
  Container,
  Header,
  Content,
  Feed,
  RisingProjects,
  Footer,
  Contacts,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <div>
          <input type="text" placeholder="Procurar um projeto por categoria" />
          <FiSearch size={22} color="#7a8af6" />
        </div>
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
        </button>
      </Header>
      <Content>
        <Feed>
          <Project />
        </Feed>
        <RisingProjects />
      </Content>
      <Footer>
        <Contacts />
      </Footer>
    </Container>
  );
};

export default Dashboard;
