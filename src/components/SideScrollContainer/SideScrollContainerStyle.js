import styled from 'styled-components';

export const SideScrollContainerStyle = styled.section`
  /* background-color: ${props => props.theme.colors.grey}; */
  height: 20vh;
  overflow-x: auto;
  display: flex;
  margin: 5% 0;
  
  ::-webkit-scrollbar {
  display: none;
}
`;
