import styled from 'styled-components';

export const MenuOptionStyle = styled.div`
    margin:5px 15px 15px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    &>h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.03em;
        color: ${props => props.theme.colors.white};
    }

    ::after {
        content:'';
        display:${props => props.isActive ? 'block' : 'none'};
        position:absolute;
        width:100%;
        bottom:-3px;
        height:2px;
        left:0;
        background-color:${props => props.theme.colors.orange};
        animation:extend 0.5s ease-in-out forwards;
    }

    @keyframes extend {
        from {
            width:0;
        }

        to {
            width:100%;
        }
    }
`;
