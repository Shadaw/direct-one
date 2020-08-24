import styled from 'styled-components';

export const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 0 90px;

  > div,
  form {
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-image: linear-gradient(90deg, #117eff, #117eff);
    transition: all 0.5s;

    font-size: 13px;
    font-weight: bold;
    color: #ffffff;

    &:hover {
      background-image: linear-gradient(90deg, #00e1ff, #117eff);
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #117eff;
  margin-right: 15px;
  position: relative;
  transition: box-shadow 0.2s;

  font-size: 14px;
  font-weight: bold;
  color: #f7f7f7;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ebeef6;
  border-radius: 5px;
  padding: 2px 10px;

  img {
    width: 66px;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 296px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #cccfde;
  margin-right: 15px;
  padding: 0 5px;
  transition: box-shadow 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin: 0 5px 0 10px;
    font-size: 14px;
    color: #117eff;
  }

  svg:last-child {
    color: #9d9d9d;
    cursor: pointer;
  }

  input {
    flex: 1;
    background-color: transparent;
    border: none;

    font-size: 13px;
    color: #9196ab;

    &:placeholder {
      color: #9d9d9d;
    }
  }
`;

export const Tooltip = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  color: #fff;
  min-width: 160px;
  background-color: #3e4157;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s;

  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);

  &::before {
    position: absolute;
    content: '';
    border: 6px solid transparent;
    border-left-width: 0;
    border-right-color: #3e4157;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
