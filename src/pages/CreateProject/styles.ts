import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContentProps {
  isFocushedDescription: boolean;
}
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
        margin-right: 10px;
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

      margin-left: 15px;
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

export const Content = styled.div<ContentProps>`
  form {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    padding: 50px;

    text {
      display: inline;
      color: #f0f0f0;
      font-size: 18px;
    }
    > div {
      margin-top: 15px;
      > div {
        margin-top: 10px;
      }
    }
    div#description {
      width: 100%;
      height: 100px;
      border-radius: 10px;
      border: 2px solid #7a8af6;
      margin: 10px 0;
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

    div.addCategorie {
      div {
        display: flex;
        /* flex-direction: row;
        align-items: center; */

        > button {
          margin-left: 10px;
          background: transparent;
          margin: auto;
          width: 20px;
          height: 30px;
          display: flex;
          align-content: center;
        }
      }
    }

    ul {
      margin-top: 20px;
      list-style: none;
      display: flex;

      li {
        display: flex;
        align-items: center;
        border: 2px solid #fff;
        padding: 2px;
        border-radius: 5px;
        color: #fff;
        font-size: 14px;
        svg {
          margin-left: 5px;
        }
        & + li {
          margin-left: 10px;
        }
      }
    }
  }
`;
