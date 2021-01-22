import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  @media (max-width: 425px) {
    div {
      height: 130px;
      div {
        bottom: -30px;
        > img {
          width: 150px;
          height: 150px;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const Header = styled.div`
  padding: 10px;
  height: 230px;
  width: 100%;
  background: ${shade(0.3, '#7a8af6')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;
    bottom: -80px;
    > img {
      margin-bottom: 30px;
      width: 300px;
      height: 300px;
      border-radius: 70%;
    }

    strong {
      font-size: 28px;
      color: #fff;
    }
  }

  button {
    background: transparent;

    svg {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  margin-top: 200px;
  padding: 0 50px 0 100px;
`;
