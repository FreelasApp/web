import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding-bottom: 20px;
  background: #fff;
  border-radius: 8px;
`;

export const Header = styled.header`
  width: 100%;
  border-radius: 8px;
  background: #efedf0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #120e21;

  > div {
    font-size: 18px;
    display: flex;
    align-items: center;

    button {
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 2px solid #7a8af6;
        margin-right: 12px;
      }
    }
  }

  > button {
    svg {
      color: #7a8af6;
    }
    &:hover {
      svg {
        color: ${shade(0.2, '#7a8af6')};
      }
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  color: #120e21;
  padding: 20px 20px 0 20px;

  h1 {
    width: 300px;
    margin-bottom: 15px;
  }
  strong {
    font-weight: 700;
  }
  p {
    margin-top: 10px;
    color: #99879d;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 10px;
    > span {
      color: #99879d;
    }

    > p {
      font-weight: 700;
      color: #9378ff;
    }
  }
`;

export const Footer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  /* margin-top: -10px; */
  span {
    border: 2px solid #99879d;
    padding: 2px;
    border-radius: 5px;
    color: #99879d;
    font-size: 14px;

    & + span {
      margin-left: 10px;
    }
  }
`;
