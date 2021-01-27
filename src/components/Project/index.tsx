import React, { useCallback, useMemo, useState } from 'react';
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';
import { Container, Header, Content, Footer } from './styles';
import clientApi from '../../service/clientApi';

interface ProjectProps {
  id: string;
  user_id: string;
  title: string;
  user_name: string;
  avatar_url: string;
  date: Date;
  price: number;
  status: 'open' | 'in-progress' | 'concluded';
  description: string;
  categories: string[];
  inProfile?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  id,
  user_id,
  avatar_url,
  date,
  description,
  price,
  title,
  user_name,
  categories,
  status,
  inProfile = false,
}) => {
  const [openSetStatus, setOpenSetStatus] = useState(false);
  const [statusUpdated, setStatusUpdated] = useState(status);

  const history = useHistory();
  const valueFormated = useMemo(() => {
    return formatValue(Number(price));
  }, [price]);

  const handleUpdateStatus = useCallback(
    async (
      freela_id: string,
      statusUpdate: 'open' | 'in-progress' | 'concluded',
    ) => {
      const response = await clientApi.patch('freelas/update/status', {
        freela_id,
        status: statusUpdate,
      });

      setStatusUpdated(response.data.status);
    },
    [],
  );

  return (
    <Container>
      <Header>
        <div>
          <button
            type="submit"
            onClick={() => history.push(`/public/profile/${user_id}`)}
          >
            <img
              src={`http://localhost:3333/files/${avatar_url}`}
              alt="user avatar"
            />
          </button>
          <strong>{user_name}</strong>
        </div>
        {inProfile ? (
          <button
            type="submit"
            onClick={() => setOpenSetStatus(!openSetStatus)}
          >
            {openSetStatus ? (
              <FiChevronUp size={28} />
            ) : (
              <FiChevronDown size={28} />
            )}
            <p>{statusUpdated}</p>
          </button>
        ) : (
          status === 'open' && (
            <button
              type="submit"
              onClick={() => {
                history.push(`/freela/${id}`);
              }}
            >
              <FiArrowRight size={23} />
            </button>
          )
        )}

        {openSetStatus && (
          <div className="setStatus">
            <button
              type="button"
              onClick={() => handleUpdateStatus(id, 'open')}
            >
              open
            </button>
            <button
              type="button"
              onClick={() => handleUpdateStatus(id, 'in-progress')}
            >
              in-progress
            </button>
            <button
              type="button"
              onClick={() => handleUpdateStatus(id, 'concluded')}
            >
              concluded
            </button>
          </div>
        )}
      </Header>

      <Content>
        <h1>{title}</h1>
        <strong>Descrição</strong>
        <p>{description}</p>
        <div>
          <span>{formatDate(date)}</span>
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
