import React, { useContext } from 'react';
import {
  StyledLogin,
  StyledLoginContainer,
  StyledLoginText,
} from '../styled/Login';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import WhatsappContext from '../context/whatsappContext';

const Login = () => {
  const whatsappContext = useContext(WhatsappContext);
  const { setUser } = whatsappContext;

  const signIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledLogin>
      <StyledLoginContainer>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png'
          alt='WhatsappLogo'
        />

        <StyledLoginText>
          <h1>Sign in to WhatsApp</h1>
        </StyledLoginText>

        <Button type='submit' onClick={signIn}>
          Sign In With Google
        </Button>
      </StyledLoginContainer>
    </StyledLogin>
  );
};

export default Login;
