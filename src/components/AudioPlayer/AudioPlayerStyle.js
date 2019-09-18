import styled from 'styled-components';

export const AudioPlayerStyle = styled.div`
  height: 90px;
  width: 100vw;
  background: ${props => props.theme.colors.grey};
  position: fixed;
  bottom: 50px;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  animation: slide-in 0.5s ease-in-out forwards;
  z-index: 777;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.white};
  padding: 0 2%;

  p {
    width: 45%;
    font-size: 12px;
  }

  button {
    /* PLAYBUTTON */
    color: white;
    height: 30px;
    width: 30px;
    border: 1.5px solid ${props => props.theme.colors.white};
    border-radius: 50%;
    background: inherit;
    position: relative;
  }

  button:nth-of-type(2),
  button:first-of-type {
    /* BACK/FORWARD 15s BUTTONS */
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 60px;
    border: none;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.5);
  }

  @keyframes slide-in {
    from {
      bottom: 140px;
    }

    to {
      bottom: 50px;
    }
  }
`;

export const StyledPodPlayer = styled.div``;
