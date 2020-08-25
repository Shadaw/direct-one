import styled, { css } from 'styled-components';

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.li<ContainerProps>`
  & + li {
    margin-top: 10px;
  }

  div {
    display: flex;

    img {
      margin-right: 10px;
      width: 16px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    background: none;

    font-size: 13px;
    color: #3e4157;
    transition: color 0.2s;

    &:hover {
      color: #117eff;
    }

    &:hover span {
      background-color: #ebeef6;
    }

    ${({ selected }) =>
      selected &&
      css`
        font-weight: bold;
        color: #117eff;
      `}

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: 11px;
      border: 1px solid #ebeef6;
      background-color: #e4e6f1;
      transition: background-color 0.2s;

      font-size: 10px;
      font-weight: bold;
      color: #9196ab;

      ${({ selected }) =>
        selected &&
        css`
          background-color: #117eff;

          font-weight: bold;
          color: #fff;
        `}
    }
  }
`;
