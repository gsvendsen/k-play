import styled from 'styled-components';

export const LayoutStyle = styled.div`
  & > section {
    padding: 0 18px;
  }

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }

  header {
    width: 100vw;
    height: 50px;
    background-color: ${props => props.theme.colors.grey};
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 999;

    & > img {
      height: 24px;
      width: auto;
    }

    & > a {
      height: auto;
      display: flex;
      align-items: center;
    }
  }

  & > header > article {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: ${props => (props.menuIsOpen ? 'block' : 'none')};
    animation: fade-in 300ms forwards ease-in-out;

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  footer {
    width: 100vw;
    height: 51px;
    background-color: ${props => props.theme.colors.grey};
    position: fixed;
    bottom: -2px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15% 2px 15%;
    box-sizing: border-box;
    z-index: 888;

    & > a {
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;

      & > img {
        height: 20px;
        width: auto;
      }
    }
  }

  & > main {
    width: 100%;
    height: 200px;
    padding: 40px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 100%;
      height: 20%;
      background: ${props => props.theme.colors.orange};
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;

      img {
        filter: invert(1);
        margin-right: 10px;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.colors.white};
      font-size: 0.875rem;

      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      & > div:last-of-type {
        margin-top: 20px;
        align-items: flex-end;
      }
    }
  }

  & > section > div > div > div > input:active ~ footer {
    display: none;
  }

  input:focus,
  input:active {
    .footer {
      display: none;
    }
  }
`;
