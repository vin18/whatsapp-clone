import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import {
  StyledSidebarChat,
  StyledSidebarChatInfo,
} from '../styled/SidebarChat';
import db from '../firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for chat room');

    if (roomName) {
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <StyledSidebarChat>
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <StyledSidebarChatInfo>
          <h2>{name}</h2>
          <p>Last message...</p>
        </StyledSidebarChatInfo>
      </StyledSidebarChat>
    </Link>
  ) : (
    <StyledSidebarChat onClick={createChat}>
      <h2>Add new chat</h2>
    </StyledSidebarChat>
  );
};

export default SidebarChat;
