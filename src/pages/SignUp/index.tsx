import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogOut } from 'react-icons/fi';
import Input from '../../components/Input';
import Logo from '../../assets/Logo.png';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" width="100px" />
        <form>
          <h1>Crie sua conta</h1>

          <Input
            type="text"
            name="firstName"
            placeholder="Nome"
            icon={FiMail}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            icon={FiMail}
          />
          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="passwor"
            placeholder="Senha"
            icon={FiLock}
          />
          <button type="button">Criar conta</button>
        </form>

        <Link to="/">
          <FiLogOut size={22} />
          Voltar ao login
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignUp;
