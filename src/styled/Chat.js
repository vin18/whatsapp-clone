import styled from 'styled-components';

export const StyledChat = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
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

export const StyledChatBody = styled.div`
  flex: 1;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12ee6265-e947-474a-a378-6d78ab0d1117/d8fr7iz-082cab4c-3f87-47e1-b2f0-efdb504372e5.jpg/v1/fill/w_1024,h_576,q_75,strp/super_hero_whatsapp_background_by_x_ama_d8fr7iz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8xMmVlNjI2NS1lOTQ3LTQ3NGEtYTM3OC02ZDc4YWIwZDExMTdcL2Q4ZnI3aXotMDgyY2FiNGMtM2Y4Ny00N2UxLWIyZjAtZWZkYjUwNDM3MmU1LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vMsSrJL87xcHSN4_yT8cSlEGqymaknC5rvamCRrnlGU');
  background-repeat: repeat;
  background-position: center;
  padding: 3rem;
  overflow: scroll;
`;

export const StyledChatMessage = styled.p`
  position: relative;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  width: fit-content;
  margin-bottom: 3rem;

  margin-left: ${(props) => props.chatReceiver && 'auto'};
  background-color: ${(props) => props.chatReceiver && '#dcf8c6'};
`;

export const StyledChatName = styled.span`
  position: absolute;
  top: -1.5rem;
  font-weight: 800;
  font-size: xx-small;
`;

export const StyledChatTimestamp = styled.span`
  margin-left: 1rem;
  font-size: xx-small;
`;

export const StyledChatFooter = styled.div``;
