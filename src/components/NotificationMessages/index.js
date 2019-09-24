import React, { Fragment, useContext, useState, useEffect } from 'react';
import { NotificationMessagesStyle } from './NotificationMessagesStyle';

import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';

const NotificationMessages = props => {
  const { notificationMessage, setNotificationMessage } = useContext(
    NotificationMessagesContext
  );

  useEffect(() => {
    if (notificationMessage) {
       setTimeout(() => {
        setNotificationMessage(null);
      }, notificationMessage.duration * 1000 + 420);

    }

  }, [notificationMessage]);

  return (
    <NotificationMessagesStyle isActive={notificationMessage}>
      {notificationMessage && (
        <Fragment>
          <img src={notificationMessage.icon ? notificationMessage.icon : 'svg/home.svg'} alt="Ikon" />
          <h3>{notificationMessage.message && notificationMessage.message}</h3>
          <img
            onClick={() => setNotificationMessage(null)}
            src="/svg/cross.svg"
            alt="cross"
          />
        </Fragment>
      )}
    </NotificationMessagesStyle>
  );
};

export default NotificationMessages;
