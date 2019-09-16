import styled from 'styled-components'

export const LayoutStyle = styled.div`

    & > section {
        padding:0 18px;
    }

    & > a {
        color:white;
        text-decoration:none;
        transition:color 0.15s ease-in-out;

        &:hover {
            color:rgba(255,255,255,0.8);
        }
    }

    header {
        width:100vw;
        height:50px;
        background-color:${props => props.theme.colors.grey};
        position:fixed;
        top:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 10%;
        box-sizing:border-box;
    }

    footer {
        width:100vw;
        height:50px;
        background-color:${props => props.theme.colors.grey};
        position:fixed;
        bottom:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 20%;
        box-sizing:border-box;
    }
`