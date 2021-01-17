import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;

  background: #fff;
  border-radius: 8px;

  header {
    width: 100%;
    border-radius: 8px;
    background: #efedf0;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #120e21;
    > div {
      font-size: 18px;
      display: flex;
      align-items: center;
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 2px solid #7a8af6;
        margin-right: 12px;
      }
    }

    > span {
      font-size: 12px;
      font-weight: 500;
    }
  }

  > div {
    padding: 10px;

    h1 {
      width: 300px;
      margin-bottom: 15px;
    }
  }
`;
