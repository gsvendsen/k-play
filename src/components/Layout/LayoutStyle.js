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
        z-index:999;

        & > img {
            height:24px;
            width:auto;
        }

        & > a {
            height:auto;
            display:flex;
            align-items:center;
        }
    }

    footer {
        width:100vw;
        height:51px;
        background-color:${props => props.theme.colors.grey};
        position:fixed;
        bottom:-2px;
        left:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 15% 2px 15%;
        box-sizing:border-box;
        z-index:999;

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