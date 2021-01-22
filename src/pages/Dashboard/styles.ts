import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  padding: 30px;

  background: ${shade(0.3, '#7a8af6')};

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    button {
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      color: ${shade(0.1, '#fff')};
      font-weight: 700;
      margin-left: 15px;

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      strong {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      width: 350px;
      height: 40px;
      background: #fff;
      padding: 10px;
      border-radius: 10px;

      margin-right: 15px;
      input {
        flex: 1;
      }

      svg {
        margin-left: 10px;
      }
    }
    svg {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 50px;
  /* align-items: center; */
  justify-content: space-between;
`;

export const Feed = styled.div`
  margin: 0 auto;
  div + div {
    margin-top: 50px;
  }
`;

export const RisingProjects = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    flex-direction: column;

    background: transparent;
    color: ${shade(0.7, '#7a8af6')};

    > div {
      text {
        margin-left: 5px;
        margin-right: 5px;
      }

      strong {
        font-weight: 500;
        font-size: 15px;
      }
    }

    span {
      margin-top: 6px;
    }

    & + button {
      margin-top: 30px;
    }

    &:hover {
      scale: 2 0.7;
      color: ${shade(1, '#7a8af6')};
    }
  }
`;
