import styled from 'styled-components'

export const VideoDescriptionStyle = styled.div`

    padding: 30px 0;

    aside {

        display:flex;
        position:relative;
        justify-content:space-between;

        & > img {
            width:8%;
            max-width:50px;
            height:auto;
        }

        & > h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 119.5%;
            letter-spacing: 0.01em;
            color: #FFFFFF;
            width:60%;
        }

        & > ::after {
            content:"";
            display:block;
            position:absolute;
            bottom:-15px;
            width:100%;
            height:1px;
            background:${props => props.theme.colors.white};
        }
    }

    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        color: #FFFFFF;
        margin:30px 0 0 0;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
        margin:20px 0 0 0;
    }
`