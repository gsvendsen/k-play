import styled from 'styled-components';

export const TagStyle = styled.div`
  padding: 0 25px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.grey};
  cursor: pointer;
  margin: 0 10px 10px 0;

  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    color: #ffffff;
  }
`;
