import styled from 'styled-components';

export const MediaCardStyle = styled.div`
  height: ${props => props.height};
  min-width: ${props => props.vertical ? '100%' : '40%'};
  max-width: ${props => props.vertical ? '100%' : '40%'};
  margin: ${props => props.margin};
  position: relative;

  & > a {
    display:${props => props.vertical ? 'flex' : 'block'};
  }

  article {
    position: relative;
    background-color:rgba(0,0,0,0.25);
    width: ${props => props.vertical && '40%'};

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

    aside {
      display:${props => props.hasProgress ? 'block' : 'none'};
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      height:5px;
      background-color:rgba(255,255,255,0.5);

      & > div {
        width:${props => props.hasProgress && (props.hasProgress.progress/props.hasProgress.duration)*100+'%' };
        height:100%;
        padding:0;
        background-color:${props => props.theme.colors.orange}
      }
    }
  }

  button {
    background-color: ${props => props.theme.colors.orange};
    width: 28px;
    height: 28px;
    border-radius: 99%;
    position: absolute;
    right: ${props => props.vertical ? '59%' : '-10%'};
    top: ${props => props.vertical ? '-15%' : '-10%'};
    border: none;
    z-index: 5;

    img {
      width: 50%;
    }
  }

  div {
    display: flex;
    align-items: ${props => props.vertical ? 'flex-start' : 'center'};
    justify-content: space-between;
    height: ${props => props.vertical ? '80px' : '50px'};
    width: ${props => props.vertical && '50%'};
    flex-direction: ${props => props.vertical ? 'column' : 'row'};
    padding: ${props => props.vertical ? '10px 5px 0 15px' : '5px 0 0 0'};

    img {
      width: 15%;
      margin-left: ${props => props.vertical ? '0' : '5%'};
      margin-top: ${props => props.vertical ? '5px' : '0'};
    }
    p {
      font-size: ${props => props.vertical ? '1rem' : '0.75rem'};
      height: 100%;
      overflow: hidden;
    }
  }

`;
