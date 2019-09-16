import styled from 'styled-components';

export const ContentModuleStyle = styled.div`
  background-color: ${props => props.theme.colors.grey};
  height: ${props => props.height};
  /* width: 200px; */
  min-width: 40%;
  margin: ${props => props.margin};
`;
