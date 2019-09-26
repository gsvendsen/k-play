import styled from 'styled-components';

export const PreferencesStyle = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 999;

  div {
    padding: 20px 20px 20px 10px;
    background: ${props => props.theme.colors.grey};

    img {
      margin: 0 10px;
      transform: rotate(90deg);
    }
  }

  button {
    align-self: flex-start;
    color: ${props => props.theme.colors.white};
    font-size: 0.875rem;
    border: none;
    background: ${props => props.theme.colors.grey};
  }

  > section {
    padding: 0px 20px 30px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    font-weight: normal;
    padding: 15px 0 10px 0;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    width: 90%;
  }

  li {
    list-style: none;
    color: ${props => props.theme.colors.white};
  }

  article {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1.375rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.white};
  }

  article > input:checked ~ span {
    background-color: ${props => props.theme.colors.orange};
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  article > input:checked ~ span:after {
    display: block;
  }

  article > span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
