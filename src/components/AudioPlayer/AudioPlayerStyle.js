import styled from 'styled-components';

export const AudioPlayerStyle = styled.div`
  audio {
    border-radius: 0px;
  }

  audio::-webkit-media-controls-panel {
    background: ${props => props.theme.colors.grey};
  }

  audio::-webkit-media-controls-mute-button {
    display: none;
  }

  audio::-webkit-media-controls-play-button {
    position: absolute;
    right: 5%;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    border: 5px solid white;
  }
  height: 90px;
  width: 100vw;
  background: ${props => props.theme.colors.grey};
  position: fixed;
  bottom: 50px;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  animation: slide-in 0.5s ease-in-out forwards;
  z-index: 777;

  @keyframes slide-in {
    from {
      bottom: 140px;
    }

    to {
      bottom: 50px;
    }
  }
`;
