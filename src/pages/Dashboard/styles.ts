import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 90px;

  aside {
    display: flex;

    > div {
      margin-top: 33px;
    }

    h1 {
      font-size: 16px;
      color: #3e4157;
    }

    ul {
      margin-top: 30px;
      width: 149px;
    }

    table {
      margin: 80px auto 0;
    }
  }
`;
