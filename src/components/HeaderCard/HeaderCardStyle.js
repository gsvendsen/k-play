import styled from 'styled-components';

export const HeaderCardStyle = styled.div`
  width: 100vw;
  height: 300px;
  margin: 0 -18px 30px -18px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 30px;
  position: relative;

  h2 {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    color: ${props => props.theme.colors.white};
  }

  h1 {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 119.5%;
    letter-spacing: 0.01em;
    color: ${props => props.theme.colors.white};
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
`;
