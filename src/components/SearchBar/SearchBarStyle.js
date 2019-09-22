import styled from 'styled-components';

export const SearchBarStyle = styled.div`
    width:100%;
    height:50px;
    margin:0 0 15px 0;
    position:relative;

    input {
        width:100%;
        height:100%;
        color:${props => props.theme.colors.white};
        background:${props => props.theme.colors.grey};
        border:none;
        font-size:1rem;
        padding:0 15px;
    }

    img {
        position:absolute;
        right:15px;
        top:18px;
        cursor:pointer;
        height:15px;
    }

    input:focus, input:active {
        border:none;
        outline:0;
    }
`;
