import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/AuthContext';
import Project from '../../components/Project';
import clientApi from '../../service/clientApi';

import {
  Container,
  Header,
  Content,
  HeaderProjects,
  ProjectList,
} from './styles';

interface UserProps {
  firstName: string;
  lastName: string;
  id: string;
  avatar: string;
}

interface CategorieProps {
  name: string;
}

interface ProjectsProps {
  id: string;
  title: string;
  status: 'open' | 'in-progress' | 'concluded';
  description: string;
  price: number;
  user: UserProps;
  categories: CategorieProps[];
  created_at: Date;
}

const Profile: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [isFocushed, setIsFocushed] = useState(false);
  const [filter, setFilter] = useState('');

  const { user } = useAuthContext();
  const history = useHistory();

  const projectsLis = useMemo(() => {
    if (filter) {
      return projects.filter(item => {
        const categoriesFilterd = item.categories.filter(categorie =>
          categorie.name.includes(filter.toUpperCase()),
        );
        return categoriesFilterd.length > 0;
      });
    }
    return projects;
  }, [filter, projects]);

  useEffect(() => {
    clientApi.get<ProjectsProps[]>('user/freelas').then(response => {
      setProjects(response.data);
    });
  }, []);

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
      </Header>
      <Content>
        <div>
          <text>Descrição</text>
          <p>{user.description}</p>
          <text>E-mail</text>
          <p>{user.email}</p>
        </div>
        <div>
          <HeaderProjects isFocushed={isFocushed}>
            <text>Meus Projetos</text>
            <div>
              <input
                type="text"
                name="search"
                placeholder="Filtrar por categoria"
                onChange={e => setFilter(e.target.value)}
                onFocus={() => setIsFocushed(true)}
                onBlur={() => setIsFocushed(false)}
              />
            </div>
          </HeaderProjects>

          <ProjectList>
            {projectsLis.map(project => {
              return (
                <Project
                  user_id={project.user.id}
                  id={project.id}
                  avatar_url={project.user.avatar}
                  date={project.created_at}
                  description={project.description}
                  price={project.price}
                  title={project.title}
                  status={project.status}
                  user_name={`${project.user.firstName} ${project.user.lastName}`}
                  categories={project.categories.map(item => item.name)}
                  inProfile
                />
              );
            })}
          </ProjectList>
        </div>
      </Content>
    </Container>
  );
};

export default Profile;
