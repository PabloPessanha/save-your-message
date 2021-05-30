import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MessagesContext = createContext();

export default function MessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storagedMessages = JSON.parse(localStorage.getItem('messages'));
    if (storagedMessages) setMessages(storagedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      { children }
    </MessagesContext.Provider>
  );
}

MessagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
