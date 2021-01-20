import React, { useMemo } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import formatValue from '../../utils/formatValue';
import { Container, Header, Content, Footer } from './styles';

interface ProjectProps {
  id: string;
  title: string;
  user_name: string;
  avatar_url: string;
  date: Date;
  price: number;
  description: string;
  categories: string[];
}

const Project: React.FC<ProjectProps> = ({
  id,
  avatar_url,
  date,
  description,
  price,
  title,
  user_name,
  categories,
}) => {
  const dateFormated = useMemo(() => {
    const parseDate = new Date(date);
    return `${parseDate.getDate()}/${parseDate.getMonth()}/${parseDate.getFullYear()}`;
  }, [date]);

  const history = useHistory();
  const valueFormated = useMemo(() => {
    return formatValue(Number(price));
  }, [price]);

  return (
    <Container>
      <Header>
        <div>
          <button type="submit">
            <img
              src={
                `http://localhost:3333/files/${avatar_url}` ||
                'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
              }
              alt="user avatar"
            />
          </button>
          <strong>{user_name}</strong>
        </div>

        <button
          type="submit"
          onClick={() => {
            history.push(`/freela/${id}`);
          }}
        >
          <FiArrowRight size={23} />
        </button>
      </Header>

      <Content>
        <h1>{title}</h1>
        <strong>Descrição</strong>
        <p>{description}</p>
        <div>
          <span>{dateFormated}</span>
          <p>{valueFormated}</p>
        </div>
      </Content>

      <Footer>
        {categories.map(item => {
          return <span>{item}</span>;
        })}
      </Footer>
    </Container>
  );
};

export default Project;
