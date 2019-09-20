import styled from 'styled-components';

export const OptionsStyle = styled.section`
  width: 100vw;
  height: 94vh;
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    width: 90%;
  }

  div {
    padding: 20px;
    background: ${props => props.theme.colors.grey};

    img {
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

  ol {
    position: relative;
    width: 100%;
    height: 1px;

    background: rgba(255, 255, 255, 0.5);
  }

  input {
    width: 100%;
    position: absolute;
    top: 2px;
    height: 0;
    -webkit-appearance: none;
  }

  input::-webkit-slider-thumb,
  input::-moz-range-thumb,
  input::-ms-thumb {
    width: 18px;
    height: 18px;
    margin: -8px 0 0;
    border-radius: 50%;
    background: #37adbf;
    cursor: pointer;
    border: 0 !important;
  }

  input::-webkit-slider-runnable-track,
  input::-moz-range-track,
  input::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: #b2b2b2;
  }

  ul {
    margin: 18px 0 0 0;
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
