import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPower, FiSearch, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Project from '../../components/Project';
import Contact from '../../components/Contact';
import clientApi from '../../service/clientApi';
import { useAuthContext } from '../../Hooks/AuthContext';
import formatDate from '../../utils/formatDate';

import { Container, Header, Content, Feed, RisingProjects } from './styles';

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

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  // const [projectsLis, setProjectsLis] = useState<ProjectsProps[]>([]);
  const [filter, setFilter] = useState('');

  const { user, logout } = useAuthContext();
  const [color, setColor] = useState('#fff');

  const history = useHistory();

  const handleSort = useCallback(
    (item1: ProjectsProps, item2: ProjectsProps) => {
      if (item1.price > item2.price) {
        return 1;
      }
      return -1;
    },
    [],
  );

  const risingProjects = useMemo(() => {
    const projectsSortd = projects.sort(handleSort);
    return projectsSortd.filter(
      (item, index) => index < 10 && item.status === 'open',
    );
  }, [projects, handleSort]);

  const projectsLis = useMemo(() => {
    if (filter) {
      return projects.filter(item => {
        const categoriesFilterd = item.categories.filter(categorie =>
          categorie.name.includes(filter.toUpperCase()),
        );

        console.log(categoriesFilterd);
        return categoriesFilterd.length > 0;
      });
    }
    return projects;
  }, [filter, projects]);

  useEffect(() => {
    clientApi.get<ProjectsProps[]>('/freelas?status=open').then(response => {
      setProjects(response.data);
      // setProjectsLis(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
          <div
            style={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: color,
            }}
          >
            <input
              type="text"
              placeholder="Procurar um projeto por categoria"
              onChange={e => setFilter(e.target.value)}
              onFocus={() => setColor('#c90fff')}
              onBlur={() => setColor('#FFF')}
            />
            <FiSearch size={22} color="#7a8af6" />
          </div>
        </div>
        <div>
          <button
            id="user"
            type="button"
            onClick={() => {
              history.push('profile');
            }}
          >
            <strong>{user.fullName}</strong>
            <img src={user.avatar} alt="user avatar" />
          </button>
          <button type="button" onClick={() => history.push('/create/project')}>
            <FiPlus size={28} />
          </button>
          <button type="button" onClick={logout}>
            <FiPower size={28} />
          </button>
        </div>
      </Header>
      <Content>
        <Feed>
          {projectsLis.map(project => {
            return (
              <Project
                id={project.id}
                user_id={project.user.id}
                avatar_url={project.user.avatar}
                date={project.created_at}
                description={project.description}
                price={project.price}
                title={project.title}
                status={project.status}
                user_name={`${project.user.firstName} ${project.user.lastName}`}
                categories={project.categories.map(item => item.name)}
              />
            );
          })}
        </Feed>
        <RisingProjects>
          {risingProjects.map(project => {
            return (
              <button
                type="button"
                onClick={() => history.push(`/freela/${project.id}`)}
              >
                <p>
                  <strong>{project.title}</strong>
                  <text>By</text>
                  <strong>{`${project.user.firstName} ${project.user.lastName}`}</strong>
                </p>
                <span>{formatDate(project.created_at)}</span>
              </button>
            );
          })}
        </RisingProjects>
      </Content>
      <Contact />
    </Container>
  );
};

export default Dashboard;
