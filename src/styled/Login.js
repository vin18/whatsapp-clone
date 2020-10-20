import styled from 'styled-components';

export const StyledLogin = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const StyledLoginContainer = styled.div`
  padding: 10rem;
  text-align: center;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);

  & > img {
    object-fit: contain;
    height: 10rem;
    margin-bottom: 4rem;
  }

  & > button {
    margin-top: 5rem;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
    font-size: inherit !important;
    padding: 1rem 2rem;
  }
`;

export const StyledLoginText = styled.div``;
