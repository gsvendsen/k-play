import styled from 'styled-components';

export const PreferencesStyle = styled.nav`
  width: 100vw;
  height: 88vh;
  position: absolute;
  right: ${props => (props.isActive ? '0px' : '-100vw')};
  opacity: ${props => (props.isActive ? '1' : '0')};
  transition: opacity 0.4s 0.1s ease-in-out, right 0.6s ease-in-out;
  top: 50px;
  background: ${props => props.theme.colors.grey};
  padding: 50px 40px 10px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p:first-of-type {
    border-bottom: 1px solid ${props => props.theme.colors.white};
  }
  p {
    padding-bottom: 8px;
    margin-bottom: 25px;
  }

  p,
  h6 {
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};
    position: relative;
    font-weight: normal;
  }

  p:last-of-type {
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};
    padding-bottom: 8px;
    margin-bottom: 25px;
    position: relative;

    ::after {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      bottom: -5px;
      bottom: -5px;
      left: 0;
      transition: all 0.5s ease-in;
      width: ${props => (props.isExpanded ? '20%' : '100%')};
      background: ${props =>
        props.isExpanded
          ? props.theme.colors.orange
          : props.theme.colors.white};
    }
  }

  li {
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    list-style-type: circle;
    list-style-position: inside;
    margin-bottom: 25px;
    animation: ${props => props.isTouched && 'fade-in 0.7s ease-in-out'};
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  p > img {
    position: absolute;
    transform: ${props =>
      props.isExpanded ? 'rotateX(180deg)' : 'rotateX(0deg)'};

    transition: transform 0.2s ease-in;
    right: 0;
    bottom: 10px;
  }

  img {
    bottom: 10px;
    margin-right: 8px;
  }

  article {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
`;
