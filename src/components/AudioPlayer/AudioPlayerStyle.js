import styled from 'styled-components';

export const AudioPlayerStyle = styled.div`
  height: ${props => (props.big ? '26%' : '90px')};
  /* padding-bottom: ${props => props.big && '62.5%'} */
  width: 100vw;
  background: ${props =>
    props.big ? props.theme.colors.black : props.theme.colors.grey};
  position: ${props => (props.big ? 'absolute' : 'fixed')};
  bottom: ${props => !props.big && '50px'};
  top: ${props => props.big && '50px'};
  display: ${props => (props.isActive ? 'flex' : 'none')};
  animation: slide-in 0.5s ease-in-out forwards;
  z-index: 777;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.white};
  padding: 0 2%;

  a {
    width: 45%;
    font-size: 12px;
  }

  button {
    /* PLAYBUTTON */
    color: white;
    height: 30px;
    width: 30px;
    border: ${props => (props.big ? 'none' : '1.5px solid white')};
    border-radius: 50%;
    background: inherit;
    position: relative;
  }

  button:nth-of-type(2),
  button:first-of-type {
    /* BACK/FORWARD 15s BUTTONS */
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50px;
    border: none;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.5);
  }

  div:nth-child(1) {
    height: 6px;
    position: absolute;
    top: ${props => !props.big && '0'};
    bottom: ${props => props.big && '0'};
    left: 0;
    width: 100%;
    background: ${props => props.big && 'rgba(255, 255, 255, 0.6)'};
    div {
      background: ${props => props.theme.colors.orange};
    }
  }

  @keyframes slide-in {
    from {
      bottom: -140px;
    }

    to {
      bottom: 48px;
    }
  }
`;

export const StyledPodPlayer = styled.div``;
