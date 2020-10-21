import React, { useState, useEffect, useContext } from 'react';
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
  Mic,
} from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import WhatsappContext from '../context/whatsappContext';
import firebase from 'firebase';

const Chat = () => {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [roomName, setRoomName] = useState('Room Name');
  const { roomId } = useParams();

  const whatsappContext = useContext(WhatsappContext);
  const { user } = whatsappContext;

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <StyledChat>
      <StyledChatHeader>
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <StyledChatHeaderInfo>
          <h3>{roomName}</h3>
          <p>
            Last seen at{' '}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map((message) => (
          <StyledChatMessage
            key={message.id}
            chatReceiver={Boolean(message.name === user.displayName)}
          >
            <StyledChatName>{message.name}</StyledChatName>
            {message.message}
            <StyledChatTimestamp>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </StyledChatTimestamp>
          </StyledChatMessage>
        ))}
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
        <Mic />
      </StyledChatFooter>
    </StyledChat>
  );
};

export default Chat;
