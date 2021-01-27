import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import { FiArrowLeft, FiUser, FiCamera } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/AuthContext';
import { useToast } from '../../Hooks/ToastContext';
import Input from '../../components/Input';
import clientApi from '../../service/clientApi';
import getValidatorErros from '../../utils/getValidatorErros';

import { Container, Header, Content } from './styles';

const ProfileEdit: React.FC = () => {
  const { user, updateUser } = useAuthContext();
  const { addToast } = useToast();
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [description, setDescription] = useState('');

  const [isFocushedDescription, setIsFocushedDescription] = useState(false);

  const [errorLastNameInput, setErrorLastNameInput] = useState(false);
  const [firstNameInputError, setFirstNameInputError] = useState(false);
  const [lastNameInputError, setLastNameInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);

  const history = useHistory();

  const handleUpdadetAvatar = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();

      if (!e.target.files) {
        addToast({
          title: 'Erro ao atualizar o avatar',
          type: 'error',
        });
      } else {
        formData.append('avatar', e.target.files[0]);

        const response = await clientApi.patch('profile/avatar', formData);

        updateUser(response.data);
      }
    },
    [addToast, updateUser],
  );

  const handleUpdadeUserProfile = useCallback(async () => {
    try {
      const formData = {
        email,
        firstName,
        lastName,
        description,
      };

      const schema = yup.object().shape({
        firstName: yup.string().required('O Nome é obrigatorio'),
        lastName: yup.string().required('O sobrenome é obrigatório'),
        email: yup.string().required('O E-mail é obrigatório'),
        description: yup.string().required('A descriptioné obrigatório'),
      });

      await schema.validate(formData, { abortEarly: false });

      const response = await clientApi.post('/profile/update', formData);

      updateUser(response.data);

      addToast({
        title: 'Sucesso ao atualizar o perfil.',
        type: 'success',
      });

      history.goBack();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errosFormated = getValidatorErros(error);
        addToast({
          type: 'error',
          title: 'Erro ao atualizar o perfil.',
          message: `Os campos: ${errosFormated} são obrigatóros`,
        });
      } else {
        addToast({
          type: 'error',
          title: 'Erro ao atualizar o perfil.',
          message:
            'Ocorreu um erro atualizar o seu perfil, por favor tente novamente!',
        });
      }
    }
  }, [email, firstName, lastName, description, addToast, history]);
  return (
    <Container>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft size={28} />
        </button>
        <div>
          <div>
            <img src={user.avatar} alt="user avatar" />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleUpdadetAvatar} />
            </label>
          </div>
          <strong>{user.fullName}</strong>
        </div>
      </Header>
      <Content isFocushedDescription={isFocushedDescription}>
        <form>
          <Input
            value={firstName}
            setValue={setFirstName}
            error={firstNameInputError}
            icon={FiUser}
            name="fistName"
            placeholder="Nome"
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            value={lastName}
            setValue={setLastName}
            icon={FiUser}
            error={lastNameInputError}
            name="lastName"
            placeholder="Sobrenome"
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            value={email}
            setValue={setEmail}
            error={emailInputError}
            icon={FiUser}
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <div id="description">
            <textarea
              name="description"
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
              onFocus={() => setIsFocushedDescription(true)}
              onBlur={() => setIsFocushedDescription(false)}
            />
          </div>

          <button type="button" onClick={handleUpdadeUserProfile}>
            Salvar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default ProfileEdit;
