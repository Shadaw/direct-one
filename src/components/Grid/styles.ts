import styled from 'styled-components';

export const Container = styled.table`
  width: 700px;
  border-spacing: 0 10px;

  th {
    font-size: 13px;
    color: #9196ab;
    text-align: center;
    font-weight: normal;
    padding: 0 16px;

    &:first-child,
    &:last-child {
      text-align: left;
    }
  }

  tbody {
    tr {
      background-color: #ffffff;
      margin-bottom: 10px;

      svg {
        width: 14px;
        margin-right: 8px;
      }

      td {
        padding: 16px;
        font-size: 13px;
        color: #3e4157;
        text-align: center;
      }

      td:first-child {
        font-weight: bold;
        text-align: left;
      }

      td:last-child {
        display: flex;
        align-items: center;
        text-align: left;
      }
    }
  }
`;
