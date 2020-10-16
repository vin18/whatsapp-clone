import styled from 'styled-components';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
`;

export const StyledSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-right: 1px solid lightgray;
`;

export const StyledSidebarHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  & > .MuiSvgIcon-root {
    margin-right: 2vw;
  }
`;

export const StyledSidebarSearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 3.5rem;
  border-radius: 2rem;

  & > input {
    border: none;
    margin-left: 1rem;
    outline: 0;
  }

  & > .MuiSvgIcon-root {
    color: gray;
  }
`;

export const StyledSidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 3.9rem;
  padding: 1rem;
`;

export const StyledSidebarChats = styled.div`
  background-color: #fff;
  flex: 1;
  overflow: scroll;
`;
