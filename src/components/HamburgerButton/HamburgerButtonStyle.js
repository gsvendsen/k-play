import styled from 'styled-components'

export const HamburgerButtonStyle = styled.div`
    width:30px;
    height:18px;

    cursor:pointer;

    & > div {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    
        & > section {
            
            width:100%;
            height:2px;
            background:${props => props.theme.colors.white}
        }
    }
`