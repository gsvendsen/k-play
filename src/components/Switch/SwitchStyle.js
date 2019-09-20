import styled from 'styled-components';

export const SwitchStyle = styled.aside`
  width: 42px;
  height: 22px;
  position: relative;
  background: ${props =>
    props.toggle ? props.theme.colors.orange : '#2a2a2a'};
  border: 1px solid #ffffff;
  border-radius: 50px;
  transition: background 0.3s ease-in-out;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    padding: 0;
    left: ${props => (props.toggle ? '22px' : '0')};
    transition: left 0.2s ease-in-out;
  }
`;
