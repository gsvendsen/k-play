import styled from 'styled-components';

export const OptionsStyle = styled.section`
  *,
  & > * {
    transition: background-color 0.5s ease-in-out;
  }
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index:999;

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

  h3 {
    font-size: 1.125rem;
    font-weight: normal;
    padding: 15px 0 10px 0;
    color: ${props => props.theme.colors.white};
  }

  p {
    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    font-size: 1rem;
    width: 90%;
  }

  div {
    padding: 20px 20px 20px 10px;
    background: ${props => props.theme.colors.grey};

    img {
      margin:0 10px;
      transform: rotate(90deg);
    }
  }

  button {
    align-self: flex-start;
    color: ${props => props.theme.colors.white};
    font-size: 0.875rem;
  }

  main {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: ${props => props.theme.colors.white};
    margin-top: 30px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    z-index: 999;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    margin-top: -10px;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }

  ul {
    margin-top: -4px;
    width: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  li {
    position: relative;
    float: left;
    text-align: center;
    color: #b2b2b2;
    cursor: pointer;
    margin-top: 15px;
    height: 25px;
    display: flex;
    align-items: flex-end;

    &::before {
      position: absolute;
      top: -25px;
      right: 0;
      left: 0;
      content: '';
      margin: 0 auto;
      width: 1px;
      height: 20px;
      background: #b2b2b2;
    }
  }
  ul > li:first-child {
    font-size: 1rem;
  }

  ul > li:nth-child(2) {
    font-size: 1.1875rem;
  }

  ul > li:last-child {
    font-size: 1.375rem;
  }
`;
