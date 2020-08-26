import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

interface ButtonProps {
  primary?: boolean;
}

export const Container = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 10;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgba(26, 23, 49, 0.5);
  border: 1px solid #707070;

  form {
    position: absolute;
    top: 117px;
    left: 50%;
    transform: translateX(-50%);
    width: 382px;

    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 1px 1px 10px #1a173134;
    border: 1px solid #e4e6f1;
    border-radius: 7px;
    padding: 25px 30px;

    legend {
      color: #9196ab;
      font-size: 13px;
      font-weight: bold;
      padding-bottom: 15px;
      border-bottom: 1px solid #e4e6f1;
    }

    label {
      margin: 25px 0 5px 0;
      color: #3e4157;
      font-size: 13px;
    }

    input {
      background-color: #ffffff;
      border: 1px solid #cccfde;
      border-radius: 5px;
      height: 33px;
      padding: 0 10px;
      margin-bottom: 5px;
      font-size: 13px;
      color: #3e4157;
    }

    span {
      color: #9196ab;
      font-size: 13px;
    }

    div {
      display: flex;
      justify-content: center;
      margin-top: 15px;

      button + button {
        margin-left: 20px;
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  color: ${({ primary }) => (primary ? '#117EFF' : '#9196AB')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? 'rgba(17, 125, 255, 0.05)' : 'rgba(145, 150, 171, 0.05)'};
  }
`;
