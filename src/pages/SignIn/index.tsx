import React, { useCallback, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import * as yup from 'yup';
import Input from '../../components/Input';
import Logo from '../../assets/logo.png';
import getValidatorErros from '../../utils/getValidatorErros';
import { useToast } from '../../Hooks/ToastContext';
import { useAuthContext } from '../../Hooks/AuthContext';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailInputError, setEmailInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);

  const { addToast } = useToast();
  const { login } = useAuthContext();
  const history = useHistory();

  const handleSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const data = {
          email,
          password,
        };

        const schema = yup.object().shape({
          email: yup.string().required('É necessário informar o email'),
          password: yup.string().required('É necessário informar a senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login(data);

        addToast({
          type: 'success',
          title: 'Sucesso ao realizar o login',
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errosFormated = getValidatorErros(error);

          setEmailInputError(!!errosFormated.email);
          setPasswordInputError(!!errosFormated.password);
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao fazer login',
            message:
              'Ocorreu um erro ao tentar fazer login, por favor cheque suas credenciais e tente novamente!',
          });
        }
      }
    },
    [email, password, addToast, history, login],
  );
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" width="100px" />
        <form onSubmit={handleSubmitForm}>
          <h1>Faça seu login</h1>

          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            icon={FiMail}
            setValue={setEmail}
            error={emailInputError}
          />
          <Input
            type="password"
            name="passwor"
            placeholder="Senha"
            icon={FiLock}
            setValue={setPassword}
            error={passwordInputError}
          />
          <button type="submit">Entrar</button>
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
