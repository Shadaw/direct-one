import styled from 'styled-components';

export const Container = styled.li`
  & + li {
    margin-top: 10px;
  }

  button {
    border: none;
    background: none;

    font-size: 13px;
    color: #3e4157;
  }
`;
