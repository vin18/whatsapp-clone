import React, { useState, useEffect, useContext } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
  SearchOutlined,
  DonutLarge,
  Chat,
  MoreVert,
} from '@material-ui/icons';

import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledSidebarSearch,
  StyledSidebarChats,
  StyledSidebarHeaderRight,
  StyledSidebarSearchContainer,
} from '../styled/Sidebar';
import SidebarChat from './SidebarChat';
import db from '../firebase';
import WhatsappContext from '../context/whatsappContext';

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const whatsappContext = useContext(WhatsappContext);
  const { user } = whatsappContext;

  useEffect(() => {
    const unsunscribe = db
      .collection('rooms')
      .onSnapshot((snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsunscribe();
    };
  }, [user]);

  return (
    <StyledSidebar>
      <StyledSidebarHeader>
        <Avatar src={user?.photoURL}></Avatar>
        <StyledSidebarHeaderRight>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </StyledSidebarHeaderRight>
      </StyledSidebarHeader>

      <StyledSidebarSearch>
        <StyledSidebarSearchContainer>
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />
        </StyledSidebarSearchContainer>
      </StyledSidebarSearch>

      <StyledSidebarChats>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
          />
        ))}
      </StyledSidebarChats>
    </StyledSidebar>
  );
};

export default Sidebar;
