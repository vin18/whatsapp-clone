import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
  StyledChat,
  StyledChatHeader,
  StyledChatHeaderInfo,
  StyledChatHeaderRight,
  StyledChatBody,
  StyledChatMessage,
  StyledChatName,
  StyledChatTimestamp,
  StyledChatFooter,
} from '../styled/Chat';
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from '@material-ui/icons';

const Chat = () => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  };

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

      <StyledChatBody>
        <StyledChatMessage>
          <StyledChatName>Vinit Raut</StyledChatName>
          Hey, guys!
          <StyledChatTimestamp>3:52pm</StyledChatTimestamp>
        </StyledChatMessage>

        <StyledChatMessage chatReceiver>
          <StyledChatName>Vinit Raut</StyledChatName>
          Hey, guys!
          <StyledChatTimestamp>3:52pm</StyledChatTimestamp>
        </StyledChatMessage>
      </StyledChatBody>

      <StyledChatFooter>
        <InsertEmoticon />
        <form>
          <input
            type='text'
            placeholder='Type a message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
      </StyledChatFooter>
    </StyledChat>
  );
};

export default Chat;
