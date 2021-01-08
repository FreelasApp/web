import styled from 'styled-components';
import { shade } from 'polished';
import BackgroudImage from '../../assets/4428861.png';

export const Container = styled.div`
  height: 100vh;
  padding: 8px;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  /* text-align: center; */
  align-items: center;

  > img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    justify-content: center;

    h1 {
      margin-bottom: 26px;
      font-size: 28px;
      line-height: 32px;
      color: ${shade(0.4, '#5700d9')};
      font-weight: 700;
    }

    > div {
      margin-bottom: 15px;
    }

    > button {
      width: 150px;
      height: 50px;
      border-radius: 10px;
      margin-top: 20px;
      background: #0951d3;
      color: #fff;
      transition: background 0.2s;
      font-weight: 700;
      font-size: 14px;

      &:hover {
        background: ${shade(0.3, '#0951d3')};
      }
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    color: #fff;
    font-weight: 700;
    transition: color 0.2s;

    > svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.3, '#fff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroudImage}) no-repeat center;
  background-size: cover;
`;
