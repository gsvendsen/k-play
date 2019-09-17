import React, {useContext} from 'react';
import {NotificationMessagesStyle} from './NotificationMessagesStyle'

import {NotificationMessagesContext} from '../../contexts/NotificationMessagesContext'

const NotificationMessages = props => {

  const {notificationMessage, setNotificationMessage} = useContext(NotificationMessagesContext)

  return (
    <NotificationMessagesStyle isActive={notificationMessage}>
        <img src="./svg/bookmark.svg" alt="Ikon" />
        <h3>{notificationMessage}</h3>
        <img onClick={() => setNotificationMessage(null)} src="./svg/cross.png" alt="cross" />
    </NotificationMessagesStyle>
  );
};

export default NotificationMessages;
