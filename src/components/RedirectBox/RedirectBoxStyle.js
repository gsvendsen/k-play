import styled from 'styled-components';

export const RedirectBoxStyle = styled.div`
  width: 111%;
  background: ${props => props.theme.colors.grey};
  height: 425px;
  margin: 15px -18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 15px;

  & > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }

  & > p {
    line-height: 150%;
    margin: -10px 0 !important;
  }

  & > a {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    text-decoration-line: underline;
    color: #4e9fff;
  }

  button {
    background: ${props => props.theme.colors.orange};
    border: none;
    color: ${props => props.theme.colors.white};
    width: 50%;
    height: 36px;
    font-size: 1.125rem;
  }
`;
