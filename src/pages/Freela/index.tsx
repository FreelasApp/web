import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/AuthContext';
import clientApi from '../../service/clientApi';
import formatName from '../../utils/formatName';
import formatDate from '../../utils/formatDate';
import formatValue from '../../utils/formatValue';

import { Container, Header, FreelaContent } from './styles';

interface UseParamsProsp {
  id: string;
}

interface ProjectProps {
  title: string;
  description: string;
  price: number;
  created_at: Date;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  };
  categories: [
    {
      name: string;
      created_at: Date;
    },
  ];
}
const Freela: React.FC = () => {
  const [project, setProject] = useState<ProjectProps>({} as ProjectProps);

  const { user } = useAuthContext();
  const history = useHistory();
  const { id } = useParams<UseParamsProsp>();

  useEffect(() => {
    clientApi.get<ProjectProps>(`freelas/${id}`).then(response => {
      setProject(response.data);
    });
  }, [id]);

  return (
    <Container>
      <Header>
        <button type="button" id="goback" onClick={() => history.goBack()}>
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
          <strong>{user.fullName}</strong>
          <img src={user.avatar} alt="user avatar" />
        </button>
      </Header>

      {project.title ? (
        <>
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
              <strong>
                {formatName(project.user.firstName, project.user.lastName)}
              </strong>
            </button>
            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <div className="footer">
              <span>{formatDate(project.created_at)}</span>
              <p>{formatValue(project.price)}</p>
            </div>

            <div className="categories">
              {project.categories.map(item => {
                return <span>{item.name}</span>;
              })}
            </div>
          </FreelaContent>

          <div className="makeProposal">
            <button type="button">Fazer uma proposta</button>
          </div>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Container>
  );
};

export default Freela;
