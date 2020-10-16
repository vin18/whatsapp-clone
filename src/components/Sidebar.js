import React from 'react';
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

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarHeader>
        <Avatar></Avatar>
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </StyledSidebarChats>
    </StyledSidebar>
  );
};

export default Sidebar;
