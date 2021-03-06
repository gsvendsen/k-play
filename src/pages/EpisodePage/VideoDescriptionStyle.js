import styled from 'styled-components';

export const VideoDescriptionStyle = styled.div`
  padding: 30px 0;

  aside {
    display: flex;
    position: relative;
    justify-content: space-between;

    & > img {
      width: 8%;
      max-width: 20px;
      height: auto;
    }

    & > h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 119.5%;
      letter-spacing: 0.01em;
      color: #ffffff;
      width: 70%;
    }

    & > ::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -15px;
      width: 100%;
      height: 1px;
      background: ${props => props.theme.colors.white};
    }
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 150%;
    color: #ffffff;
    margin: 30px 0 0 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    color: #ffffff;
    margin: 20px 0 0 0;
    display: flex;

    img {
      margin-right: 10px;
    }
  }
`;
