import styled from 'styled-components';

export const AudioPlayerStyle = styled.div`
  height: ${props => (props.big ? '26%' : '90px')};
  border-bottom: ${props => (props.big ? 'none' : 'rgba(0,0,0,0.2) solid 3px')};
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
    height: 35px;
    width: 35px;
    /* border: ${props => (props.big ? 'none' : '1.5px solid white')}; */
    border: ${props => (props.big ? 'none' : 'none')};
    border-radius: 50%;
    background: inherit;
    position: relative;
  }

  button:last-of-type,
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
    background: ${props =>
      props.big ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
    div {
      background: ${props => props.theme.colors.orange};
      min-width:2%;
    }
  }

  p {
    position: ${props => props.big && 'absolute'};
    bottom: ${props => props.big && '8px'};
    font-size: ${props => props.big && '0.625rem'};
  }

  p:first-of-type {
    left: ${props => props.big && '2px'};
  }

  p:last-of-type {
    right: ${props => props.big && '2px'};
  }

  aside {
    position: absolute;
    color: red;
    width: 20px;
    height: 20px;
  }

  @keyframes slide-in {
    from {
      bottom: -140px;
    }

    to {
      bottom: 49px;
    }
  }
`;

export const StyledPodPlayer = styled.div``;
