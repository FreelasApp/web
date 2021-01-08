import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import Input from '../../components/Input';
import Logo from '../../assets/Logo.png';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" width="100px" />
        <form>
          <h1>Faça seu login</h1>

          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="passwor"
            placeholder="Senha"
            icon={FiLock}
          />
          <button type="button">Entrar</button>
        </form>

        <Link to="/sign-up">
          <FiLogIn size={22} />
          Criar conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
