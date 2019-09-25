import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  width: 90vw;
  height: 100vh;
  position: absolute;
  right: ${props => (props.isActive ? '0px' : '-100vw')};
  opacity: ${props => (props.isActive ? '1' : '0')};
  transition: opacity 0.4s 0.1s ease-in-out, right 0.4s ease-in-out;
  top: 0px;
  background: ${props => props.theme.colors.grey};
  padding: 75px 45px 25% 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      width: ${props => (props.isExpanded.two ? '20%' : '100%')};
      background: ${props =>
        props.isExpanded.two
          ? props.theme.colors.orange
          : props.theme.colors.white};
    }

    img {
      position: absolute;
      transform: ${props =>
        props.isExpanded.two ? 'rotateX(180deg)' : 'rotateX(0deg)'};

      transition: transform 0.2s ease-in;
      right: 0;
      bottom: 10px;
    }
  }

  p:first-of-type {
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
      width: ${props => (props.isExpanded.one ? '20%' : '100%')};
      background: ${props =>
        props.isExpanded.one
          ? props.theme.colors.orange
          : props.theme.colors.white};
    }

    img {
      position: absolute;
      transform: ${props =>
        props.isExpanded.one ? 'rotateX(180deg)' : 'rotateX(0deg)'};

      transition: transform 0.2s ease-in;
      right: 0;
      bottom: 10px;
    }
  }

  li {
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    list-style: none;
    margin-bottom: 25px;
    animation: ${props => props.isTouched && 'fade-in 0.7s ease-in-out'};
    position: relative;
    padding: 0 0 0 15px;

    ::before {
      display: block;
      content: '';
      position: absolute;
      top: 6.5px;
      left: 0px;
      height: 8px;
      width: 8px;
      border: white solid 1px;
      border-radius: 50%;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
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
