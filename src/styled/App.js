import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top: -5rem;
  width: 90vw;
  height: 90vh;
  box-shadow: -0.1rem 0.4rem 0.2rem -0.6rem rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 800px) {
    margin-top: 0;
    width: 98vw;
    height: 98vh;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 0;
    width: 98vw;
    height: 98vh;
  }
`;
