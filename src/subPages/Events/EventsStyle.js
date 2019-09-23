import styled from 'styled-components';

export const EventsStyle = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > section {
    padding: 0px 0px 30px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;

    & > article {
        display:flex;
        justify-content:space-between;
        padding:40px 20px;

        border-bottom:1px solid ${props => props.theme.colors.white};

        & > img {
            transform:rotate(-90deg);
        }
    }
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

`;
