import styled from 'styled-components';

export const MediaCardStyle = styled.div`
  height: ${props => props.height};
  min-width: 40%;
  margin: ${props => props.margin};
  position: relative;

  article {
    position: relative;
    background-color:rgba(0,0,0,0.25);

    img {
      width: 100%;
      height:80px;
      object-fit: contain;
    }

    p {
      position: absolute;
      right: 0;
      bottom: 5px;
      font-size: 0.75rem;
      background: rgba(0,0,0);
      padding: 0 3px 0 5px;
    }
  }

  button {
    background-color: ${props => props.theme.colors.orange};
    width: 28px;
    height: 28px;
    border-radius: 99%;
    position: absolute;
    right: -10%;
    top: -10%;
    border: none;
    z-index: 5;

    img {
      width: 50%;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    img {
      width: 15%;
      margin-left: 5%;
    }
    p {
      font-size: 0.75rem;
      height: 100%;
      overflow: hidden;
    }
  }

`;
