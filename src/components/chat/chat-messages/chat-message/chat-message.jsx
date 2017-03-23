import React from 'react';
import classnames from 'classnames';

import UserAvatar from '../../../user-avatar/user-avatar';

import chatMessageClassNames from '../../../../assets/css/blocks/chat/chat-messages/chat-message/chat-message.css';

const ChatMessage = ({ className, time, message, isFrom }) => {
  const messageClassName = classnames(chatMessageClassNames['chat-message'], {
    [chatMessageClassNames['chat-message_right-direction']]: !isFrom,
  }, className);
  const containerClassName = classnames(chatMessageClassNames['chat-message__container'], {
    [chatMessageClassNames['chat-message__container_right-direction']]: !isFrom,
  });
  const contentClassName = classnames(chatMessageClassNames['chat-message__content'], {
    [chatMessageClassNames['chat-message__content_right-direction']]: !isFrom,
  });

  return (
    <div className={messageClassName}>
      <UserAvatar />
      <div className={containerClassName}>
        <span className={chatMessageClassNames['chat-message__time']}>{time}</span>
        <div className={contentClassName}>{message}</div>
      </div>
    </div>
  );
};

ChatMessage.defaultProps = {
  className: '',
  isFrom: true,
};

ChatMessage.propTypes = {
  className: React.PropTypes.string,
  time: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  isFrom: React.PropTypes.bool,
};

export default ChatMessage;

