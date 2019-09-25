import styled from 'styled-components'

export const LayoutStyle = styled.div`

    overflow-y:${props => props.menuIsOpen ? 'hidden' : 'scroll'};
    height:${props => props.menuIsOpen ? '87vh' : '100%'};


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
        transition: background-color 0.5s ease-in-out;

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

    & > header >  article {
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.5);
        z-index:-1;
        display:${props => props.menuIsOpen ? 'block' : 'none'};
        animation:fade-in 300ms forwards ease-in-out;

        @keyframes fade-in {
            from {
                opacity:0;
            }

            to {
                opacity:1;
            }
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
        z-index:888;

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