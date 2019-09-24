import styled from 'styled-components';

export const RedirectBoxStyle = styled.div`
    width:100%;
    background:${props => props.theme.colors.grey};
    height:120px;
    margin:15px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px 15px;

    & > h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #FFFFFF;
    }

    & > a {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 150%;
        text-decoration-line: underline;
        color: #4E9FFF;
    }
`;
