import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContentProps {
  isFocushedDescription: boolean;
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

    > div {
      > img {
        margin-bottom: 30px;
        width: 300px;
        height: 300px;
        border-radius: 70%;
        margin-bottom: -90px;
        border: 4px solid #fff;
      }

      label {
        /* position: absolute; */
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #fff;
        transition: 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 250px;
        position: absolute;
        svg {
          width: 20px;
          height: 20px;
          background: transparent;
        }
        &:hover {
          background: ${shade(0.2, '#fff')};
        }
      }
      input {
        display: none;
      }
    }

    strong {
      margin-top: 120px;
      font-size: 28px;
      color: #ffffff;
    }
  }

  button {
    background: transparent;

    svg {
      color: #fff;
    }
  }
`;

export const Content = styled.div<ContentProps>`
  padding: 0 50px 0 100px;
  max-width: 500px;

  margin: 0 auto;

  margin-bottom: 40px;

  form {
    margin-top: 200px;
    div + div {
      margin-top: 10px;
    }
  }

  form {
    div#description {
      width: 100%;
      height: 100px;
      border-radius: 10px;
      border: 2px solid #7a8af6;
      textarea {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        height: 100%;
      }
      ${props =>
        props.isFocushedDescription &&
        css`
          border: 2px solid #002b96;
        `}
    }
    button {
      margin-top: 50px;
      width: 100%;
      height: 50px;
      border-radius: 8px;
      transition: background 0.3s;
      &:hover {
        background: ${shade(0.2, '#FFF')};
      }
    }
  }
`;
