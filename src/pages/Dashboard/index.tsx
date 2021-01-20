import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import Project from '../../components/Project';
import Contact from '../../components/Contact';
import clientApi from '../../service/clientApi';
import { useAuthContext } from '../../Hooks/AuthContext';

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
  description: string;
  price: number;
  user: UserProps;
  categories: CategorieProps[];
  created_at: Date;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    clientApi.get<ProjectsProps[]>('/freelas?status=open').then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <div>
          <input type="text" placeholder="Procurar um projeto por categoria" />
          <FiSearch size={22} color="#7a8af6" />
        </div>
        <button
          id="user"
          type="button"
          onClick={() => {
            //
          }}
        >
          <strong>{`${user.firstName} ${user.lastName}`}</strong>
          <img
            src={`http://localhost:3333/files/${user.avatar}`}
            alt="user avatar"
          />
        </button>
      </Header>
      <Content>
        <Feed>
          {projects.map(project => {
            return (
              <Project
                id={project.id}
                avatar_url={project.user.avatar}
                date={project.created_at}
                description={project.description}
                price={project.price}
                title={project.title}
                user_name={`${project.user.firstName} ${project.user.lastName}`}
                categories={project.categories.map(item => item.name)}
              />
            );
          })}
        </Feed>
        <RisingProjects>
          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>

          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>

          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>

          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>

          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>

          <button type="button">
            <div>
              <strong>Create an API</strong>
              <text>By</text>
              <strong>Iara-Caroline</strong>
            </div>
            <span>30/10/2021</span>
          </button>
        </RisingProjects>
      </Content>
      <Contact />
    </Container>
  );
};

export default Dashboard;
