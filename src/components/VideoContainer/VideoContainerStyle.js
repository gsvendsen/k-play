import styled from 'styled-components';

export const VideoContainerStyle = styled.div`
  & > section {
    width: 100vw;
    margin: 0 -18px;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 62.25%;
    /* padding: 18px 18px 62.25% 18px; */
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
