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
  const [messages, setMessages] = useState('');

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

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
          <p>{messages[0]?.message}</p>
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
