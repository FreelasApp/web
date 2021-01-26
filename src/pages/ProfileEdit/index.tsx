import React, { useCallback, useState } from 'react';
import { FiArrowLeft, FiUser, FiCamera } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/AuthContext';
import { useToast } from '../../Hooks/ToastContext';
import Input from '../../components/Input';
import { Container, Header, Content } from './styles';
import clientApi from '../../service/clientApi';

const ProfileEdit: React.FC = () => {
  const { user, updateUser } = useAuthContext();
  const { addToast } = useToast();
  const [email, setEmail] = useState(user.email);
  const [firstname, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [description, setDescription] = useState('');

  const [errorLastNameInput, setErrorLastNameInput] = useState(false);

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
      <Content>
        <form>
          <Input
            value={firstname}
            setValue={setFirstName}
            icon={FiUser}
            name="fistName"
            placeholder="Nome"
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            value={lastName}
            setValue={setLastName}
            icon={FiUser}
            name="lastName"
            placeholder="Sobrenome"
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            value={email}
            setValue={setEmail}
            icon={FiUser}
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            value={description}
            setValue={setDescription}
            name="description"
            placeholder="Descrição"
            style={{
              height: 100,
            }}
            onChange={e => setDescription(e.target.value)}
          />

          <button type="button">Salvar</button>
        </form>
      </Content>
    </Container>
  );
};

export default ProfileEdit;
