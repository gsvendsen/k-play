import styled from 'styled-components';

export const MediaCardStyle = styled.div`
  height: ${props => props.height};
  min-width: ${props => props.vertical ? '100%' : '43.1%'};
  max-width: ${props => props.vertical ? '100%' : '40%'};
  margin: ${props => props.margin};
  position: relative;

  & > a {
    display:${props => props.vertical ? 'flex' : 'block'};
  }

  article {
    position: relative;
    width: ${props => props.vertical && '45%'};

    & > section {
      background: linear-gradient(to right top,rgba(190,93,15,0.7),#051937);
      position:absolute;
      width:100%;
      height:107px;
      top:0;
      left:0;
      display:flex;
      align-items:center;
      padding:0 6px;

      & > h2 {
        font-style: normal;
        font-weight:800;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.03em;
        color: #FFFFFF;
      }
    }

    img {
      width: 100%;
      height:107px;
      object-fit: cover;
    }

    p {
      position: absolute;
      right: 0;
      bottom: ${props => props.hasProgress ? '6px' : '5px'};
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
      height:6px;
      background-color:#8E8E8E;
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
    right: ${props => props.vertical ? '53%' : '-8%'};
    top: ${props => props.vertical ? '-10%' : '-8%'};
    border: none;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  }

  div {
    display: flex;
    align-items: ${props => props.vertical ? 'flex-start' : 'center'};
    justify-content: space-between;
    height: ${props => props.vertical ? '100%' : '50px'};
    width: ${props => props.vertical && '50%'};
    flex-direction: ${props => props.vertical ? 'column' : 'row'};
    padding: ${props => props.vertical ? '10px 5px 0 15px' : '5px 0 0 0'};

    img {
      height: ${props => props.vertical ? '15%' : '100%'};
      margin-left: ${props => props.vertical ? '0' : '5%'};
      margin-top: ${props => props.vertical ? '15px' : '0'};
    }
    p {
      font-size: ${props => props.vertical ? '0.9rem' : '0.75rem'};
      display: -webkit-box;
      -webkit-line-clamp: ${props => props.vertical ? '3' : '2'};
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
  }

`;
