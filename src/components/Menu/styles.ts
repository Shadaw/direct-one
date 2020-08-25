import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1731;
  height: 100vh;
  width: 70px;
  padding: 45px 0;
  border-width: 3px 0;
  border-style: solid;
  border-image: linear-gradient(90deg, #00e1ff, #117eff);
  border-image-slice: 1;

  > span,
  div > span {
    & + span {
      margin-top: 20px;
    }

    position: relative;
    &:hover span {
      opacity: 1;
      visibility: visible;
    }
  }

  img {
    width: 50px;
    margin-bottom: 68px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: auto 0 0;
  }

  svg {
    & + svg {
      margin-top: 24px;
    }

    color: #e4e6f1;
    transition: color 0.2s;

    &:hover {
      color: #117eff;
    }
  }
`;

export const Separetor = styled.span`
  width: 20px;
  height: 1px;
  background: -webkit-linear-gradient(90deg, #00e1ff, #117eff);
`;

export const Tooltip = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  color: #9d9d9d;
  min-width: 160px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s;

  position: absolute;
  left: calc(100% + 20px);
  top: 50%;
  transform: translateY(-50%);

  &::before {
    position: absolute;
    content: '';
    border: 6px solid transparent;
    border-left-width: 0;
    border-right-color: #fff;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
