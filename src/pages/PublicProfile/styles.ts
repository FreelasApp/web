import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface HeaderProjectsProps {
  isFocushed: boolean;
}
export const Container = styled.div`
  /* height: 100vh; */

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
  padding: 10px 30px;
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
  max-width: 600px;
  padding: 0 50px 0 100px;
  margin: 0 auto;
  margin-top: 200px;
  color: #fff;

  > div {
    text {
      color: #120e21;
      font-size: 18px;
    }

    p {
      margin: 15px 0;
      font-size: 19px;
    }
  }
`;

export const HeaderProjects = styled.div<HeaderProjectsProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
  text {
    color: ${shade(0.3, '#fff')};
  }

  > div {
    width: 200px;
    height: 30px;
    padding: 2px 4px;
    background: #fff;
    border-radius: 8px;
    border: 2px solid #fff;
    input {
      width: 100%;
      height: 100%;
    }

    ${props =>
      props.isFocushed &&
      css`
        border: 2px solid #002b96;
      `}
  }
`;

export const ProjectList = styled.div`
  margin-bottom: 70px;
  > div {
    & + div {
      margin-top: 20px;
    }
  }
`;
