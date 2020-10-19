import styled from 'styled-components';

export const StyledChat = styled.div`
  flex: 0.7;
`;

export const StyledChatHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const StyledChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 2rem;

  & > h3 {
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  & > p {
    color: gray;
  }
`;

export const StyledChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 10rem;
`;

export const StyledChatBody = styled.div``;

export const StyledChatFooter = styled.div``;
