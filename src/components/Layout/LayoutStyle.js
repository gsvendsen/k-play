import styled from 'styled-components'

export const LayoutStyle = styled.div`

    & > section {
        padding:0 18px;
    }

    a {
        color: ${props => props.theme.colors.white};
        text-decoration:none;
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
        padding:0 20px;
        box-sizing:border-box;

        & > img {
            height:24px;
            width:auto;
        }
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
        padding:0 15%;
        box-sizing:border-box;

        & > a {
            display:flex;
            flex-direction:column;
            font-size:0.75rem;

            & > img {
                height:20px;
                width:auto;
            }
        }
    }
`