import styled from 'styled-components';

export const StyledSidebarChat = styled.div`
  display: flex;
  padding: 2rem;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;

export const StyledSidebarChatInfo = styled.div`
  margin-left: 1.5rem;

  & > h2 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;
