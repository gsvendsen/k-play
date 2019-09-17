import styled from 'styled-components';

export const NotificationMessagesStyle = styled.div`

  position:fixed;
  width:100vw;
  bottom:50px;
  height:40px;
  border-bottom:1px solid ${props => props.theme.colors.grey};
  background-color:${props => props.theme.colors.orange};
  display:${props => props.isActive ? 'flex' : 'none'};
  align-items:center;
  justify-content:space-between;
  padding:0 25px;
  animation:slide-up forwards 0.42s ease-in-out;
  z-index:888;

  & > h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.03em;
    color: ${props => props.theme.colors.white};
  }

  @keyframes slide-up {
      from {
          bottom:10px;
      }

      to {
          bottom:50px;
      }
  }
`;
