import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MessagesContext = createContext();

export default async function MessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storagedMessages = JSON.parse(localStorage.getItem('messages'));
    if (storagedMessages) setMessages(storagedMessages);
  }, []);

  return (
    <MessagesContext.Provider value={{ messages }}>
      { children }
    </MessagesContext.Provider>
  );
}

MessagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
