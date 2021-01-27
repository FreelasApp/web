import React, { useState, useCallback, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiLogOut } from 'react-icons/fi';
import * as yup from 'yup';

import Input from '../../components/Input';
import Logo from '../../assets/logo.png';
import getValidatorErros from '../../utils/getValidatorErros';
import { useToast } from '../../Hooks/ToastContext';

import { Container, Content, Background } from './styles';
import clientApi from '../../service/clientApi';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameInputError, setFIrstNameInputError] = useState(false);
  const [lastNameInputError, setLastNameInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const data = {
          firstName,
          lastName,
          email,
          password,
        };

        const schema = yup.object().shape({
          firstName: yup
            .string()
            .required('É necessário informar o primero nome'),
          lastName: yup
            .string()
            .required('É necessário informar o seu sobrenome'),
          email: yup.string().required('É necessário informar o email'),
          password: yup.string().required('É necessário informar a senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await clientApi.post('/users', data);

        addToast({
          type: 'success',
          title: 'Sucesso ao se cadastrar',
          message:
            ' O seu cadastro foi realizado com sucesso, você já pode realizar o seu login.',
        });

        history.goBack();
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errosFormated = getValidatorErros(error);

          setFIrstNameInputError(!!errosFormated.firstName);
          setLastNameInputError(!!errosFormated.lastName);
          setEmailInputError(!!errosFormated.email);
          setPasswordInputError(!!errosFormated.password);
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao realizar o cadastro',
            message:
              'Ocorreu um erro ao tentar seu cadastro, por favor tente novamente!',
          });
        }
      }
    },
    [firstName, lastName, email, password, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" width="100px" />
        <form onSubmit={handleSubmitForm}>
          <h1>Crie sua conta</h1>

          <Input
            type="text"
            name="firstName"
            placeholder="Nome"
            icon={FiMail}
            setValue={setFirstName}
            error={firstNameInputError}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            icon={FiMail}
            setValue={setLastName}
            error={lastNameInputError}
          />
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
            name="password"
            placeholder="Senha"
            icon={FiLock}
            setValue={setPassword}
            error={passwordInputError}
          />
          <button type="submit">Criar conta</button>
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
