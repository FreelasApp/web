import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  > div.makeProposal {
    margin-top: 40px;
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    button {
      width: 100%;
      max-width: 300px;
      height: 40px;
      border-radius: 10px;
      background: #efedf0;
      transition: background 1s;
      font-weight: bold;
      &:hover {
        background: ${shade(0.3, '#efedf0')};
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  background: ${shade(0.3, '#7a8af6')};
  padding: 30px;

  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    color: ${shade(0.1, '#fff')};
    font-weight: 700;
  }

  button#goback {
    transition: color 1s;
    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.3, '#fff')};
    }
  }

  button#user {
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
`;

export const FreelaContent = styled.div`
  width: 100%;
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    color: ${shade(0.1, '#fff')};
    font-weight: 700;
    margin-bottom: 40px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-right: 10px;
    }

    strong {
      font-size: 20px;
    }
  }

  > p {
    margin-top: 30px;
    font-size: 18px;
    color: #fff;
  }

  div.footer {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${shade(0.1, '#fff')};
    font-size: 14px;

    > p {
      font-size: 16px;
      font-weight: bold;
    }
  }

  div.categories {
    margin-top: 40px;
    span {
      border: 2px solid #fff;
      padding: 2px;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;

      & + span {
        margin-left: 10px;
      }
    }
  }
`;
export const Footer = styled.div``;
