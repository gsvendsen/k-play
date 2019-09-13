import styled from 'styled-components'

export const AudioPlayerStyle = styled.div`
    height:90px;
    background:grey;
    width:100vw;
    position:fixed;
    bottom:50px;
    display:${props => props.isActive ? 'flex' : 'none'};
    animation:slide-in 0.5s ease-in-out forwards;

    @keyframes slide-in {
        from {
            bottom: 140px;
        }

        to {
            bottom: 50px;
        }
    }
`