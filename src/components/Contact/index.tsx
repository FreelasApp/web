import React from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Redes:</h1>
      <div>
        <a href="https://github.com/FreelasApp" target="blank">
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/jhonnas-keven-884a97159/"
          target="blank"
        >
          <FiLinkedin size={28} />
        </a>

        <a href="maioto:jhonasnunes452@gmail.com" target="blank">
          <FiMail size={28} />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
