import styled from 'styled-components';

export const HamburgerButtonStyle = styled.div`
  width: 30px;
  height: 18px;

  z-index:888;

  cursor: pointer;

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > section {
      width: 100%;
      height: 2px;
      background: ${props => props.theme.colors.white};
      transition: all 0.2s ease-in-out;
    }
  }

  section:first-child {
    transform: ${props =>
      props.menuIsOpen
        ? 'translateX(5px) translateY(-2px) rotate(45deg)'
        : 'none'};
    transform-origin: top left;
  }
  section:nth-child(2) {
    opacity: ${props => (props.menuIsOpen ? '0' : '100%')};
  }
  section:last-child {
    transform: ${props =>
      props.menuIsOpen
        ? 'translateX(3px) translateY(3px) rotate(-45deg)'
        : 'none'};
    transform-origin: top left;
  }
`;
