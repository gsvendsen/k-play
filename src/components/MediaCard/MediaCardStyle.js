import styled from 'styled-components';

export const MediaCardStyle = styled.div`
  /* background-color: ${props => props.theme.colors.grey}; */
  height: ${props => props.height};
  /* width: 200px; */
  min-width: 40%;
  margin: ${props => props.margin};
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
  }

  div {
    background-color: ${props => props.theme.colors.orange};
    width: 20%;
    height: 20%
    border-radius: 99%;
    position: absolute;
    right: -10%;
    top: -10%;
    
  }

  p {
    font-size: 0.75rem;
  }
`;
