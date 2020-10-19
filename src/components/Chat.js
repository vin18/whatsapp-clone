import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
  StyledChat,
  StyledChatHeader,
  StyledChatHeaderInfo,
  StyledChatHeaderRight,
} from '../styled/Chat';
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
} from '@material-ui/icons';

const Chat = () => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <StyledChat>
      <StyledChatHeader>
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <StyledChatHeaderInfo>
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </StyledChatHeaderInfo>

        <StyledChatHeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </StyledChatHeaderRight>
      </StyledChatHeader>
    </StyledChat>
  );
};

export default Chat;
