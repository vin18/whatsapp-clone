import React, { useReducer } from 'react';
import WhatsappContext from './whatsappContext';
import WhatsappReducer from './whatsappReducer';
import { SET_USER } from './types';

const WhatsappState = (props) => {
  const initialState = {
    user: '',
  };

  const [state, dispatch] = useReducer(WhatsappReducer, initialState);

  // Set user
  const setUser = (user) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };

  return (
    <WhatsappContext.Provider value={{ user: state.user, setUser }}>
      {props.children}
    </WhatsappContext.Provider>
  );
};

export default WhatsappState;
