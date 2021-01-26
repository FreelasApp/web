import React from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/AuthContext';
import Project from '../../components/Project';
import { Container, Header, Content } from './styles';

const Profile: React.FC = () => {
  const { user } = useAuthContext();
  const history = useHistory();
  return (
    <Container>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft size={28} />
        </button>
        <div>
          <img src={user.avatar} alt="user avatar" />
          <strong>{user.fullName}</strong>
        </div>
        <button type="button" onClick={() => history.push('/profile/edit')}>
          <FiEdit size={26} />
        </button>

        {/* </div> */}
      </Header>
      <Content>
        <div>
          <h1>Porjetos</h1>
          <Project
            date={new Date()}
            user_name="Jhonnas Keven"
            avatar_url="http://localhost:3333/files/profile.jpeg"
            categories={['NODEJS', 'REACT', 'REACT NATIVE']}
            description="skçdlfkfvznkjvf ocndsvivhfvkjvnkjczvx id vd\vohvoifd disfvhivlvhifuh jidhvoihfvifhv idvisohdvno hdviidsvoisj vosv vv ijvivj dsjv sivjpsdjv0 svdsjvisvj psjvovjovp dvjv vpodj ivjv djdov dsjv psvjpvojiv vjdsov jdjvj vj vojojdvis "
            id="dijfkfjkdjg"
            price={4000}
            title="kskldlvf"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Profile;
