import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FiPower,
  FiSearch,
  FiPlus,
  FiArrowLeft,
  FiXCircle,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { number } from 'yup';
import Logo from '../../assets/logo.png';
import Project from '../../components/Project';
import Contact from '../../components/Contact';
import clientApi from '../../service/clientApi';
import { useAuthContext } from '../../Hooks/AuthContext';
import { useToast } from '../../Hooks/ToastContext';
import formatDate from '../../utils/formatDate';

import { Container, Header, Content } from './styles';
import Input from '../../components/Input';

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
  status: 'open' | 'in-progres' | 'concluded';
  description: string;
  price: number;
  user: UserProps;
  categories: CategorieProps[];
  created_at: Date;
}

const CreateProject: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFocushed, setIsFocushedDescription] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [categorie, setCategorie] = useState('');
  const [price, setPrice] = useState();

  const { user, logout } = useAuthContext();
  const { addToast } = useToast();
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

  useEffect(() => {
    clientApi.get<ProjectsProps[]>('/freelas?status=open').then(response => {
      setProjects(response.data);
    });
  }, []);

  const handleAddCategorie = useCallback(() => {
    if (categories.length < 4 && !!categorie) {
      setCategories([...categories, categorie.trim().toUpperCase()]);
      setCategorie('');
    }
  }, [categories, categorie]);

  const handleDeleteCategorie = useCallback(
    cat => {
      setCategories(categories.filter(item => item !== cat));
    },
    [categories],
  );

  const handleCreteProject = useCallback(async () => {
    try {
      const formData = {
        title,
        description,
        categories: categories.reduce((acumulator, item, index) => {
          if (index < categories.length - 1) {
            return `${acumulator + item}, `;
          }
          return `${acumulator + item}`;
        }, ''),
        price: Number(price),
      };

      await clientApi.post('freelas', formData);
      addToast({
        type: 'success',
        title: 'Projeto criando com sucesso.',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao criar um novo projto',
      });
    }
  }, [title, description, categories, price, addToast]);
  return (
    <Container>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft size={28} />
            <span>Voltar</span>
          </button>
        </div>
        <div>
          <button
            id="user"
            type="button"
            onClick={() => {
              history.push('/profile');
            }}
          >
            <strong>{user.fullName}</strong>
            <img src={user.avatar} alt="user avatar" />
          </button>
          <button type="button" onClick={logout}>
            <FiPower size={28} />
          </button>
        </div>
      </Header>
      <Content isFocushedDescription={isFocushed}>
        <form>
          <text>
            Cree um novo projeto e ajude outres pessoas a fazerem uma graninha
          </text>
          <div>
            <Input name="Title" setValue={setTitle} placeholder="Titulo" />
          </div>

          <div id="description">
            <textarea
              name="description"
              placeholder="Descrição"
              onChange={e => setDescription(e.target.value)}
              onFocus={() => setIsFocushedDescription(true)}
              onBlur={e => {
                setIsFocushedDescription(false);
                setDescription(e.target.value);
              }}
            />
          </div>
          <div>
            <text>
              Digite o valor que voçê está disposto a pagar por esse projeto
            </text>
            <Input name="price" setValue={setPrice} placeholder="Valor" />
          </div>

          <div className="addCategorie">
            <text>
              Facilite a busca por seu projeto, adicione até 4 categorias.
            </text>
            <div>
              <Input
                name="categorie"
                value={categorie}
                setValue={setCategorie}
                placeholder="Categoria"
                onChange={e => setCategorie(e.target.value)}
              />
              <button type="button" onClick={handleAddCategorie}>
                <FiPlus size={28} />
              </button>
            </div>
            <ul>
              {categories.map(item => {
                return (
                  <li>
                    <span>{item}</span>
                    <FiXCircle
                      size={22}
                      onClick={() => handleDeleteCategorie(item)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <button type="button" onClick={handleCreteProject}>
            Adicionar Projeto
          </button>
        </form>
      </Content>
      <Contact />
    </Container>
  );
};

export default CreateProject;
