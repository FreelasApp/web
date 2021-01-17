import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.head`
  width: 100%;
  padding: 30px;

  background: ${shade(0.3, '#7a8af6')};

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    width: 350px;
    height: 40px;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    input {
      flex: 1;
    }

    svg {
      margin-left: 10px;
    }
  }
  button {
    width: 76px;
    height: 76px;
    border-radius: 50%;

    img {
      width: 76px;
      height: 76px;
      border-radius: 50%;

      border: 2px solid #fff;
    }
  }
`;

export const Content = styled.div``;

export const Feed = styled.div`
  margin-top: 30px;
`;

export const RisingProjects = styled.div``;
export const Footer = styled.div``;
export const Contacts = styled.div``;
