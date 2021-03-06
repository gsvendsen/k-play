import styled from 'styled-components';

export const SideScrollLabel = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 1.125rem;
  line-height: 1.4375rem;
  letter-spacing: 0.03em;

  > section {
    overflow-x: auto;
    width: auto;
    margin:0 -18px;
  }

  section::-webkit-scrollbar {
    display: none;
  }
`;
