import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 20px 70px;
  background: ${shade(0.3, '#7a8af6')};
  height: 150px;
  color: ${shade(0.3, '#fff')};

  h1 {
    font-size: 20px;
    margin-bottom: 40px;
  }

  div {
    max-width: 500px;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      background: transparent;
      color: ${shade(0.3, '#fff')};
    }
  }
`;
