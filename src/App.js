import React from 'react';
import Routes from './routes';
import './styles/GlobalStyles.css';
import MessageProvider from './provider/MessagesProvider';

const App = () => (
  <MessageProvider>
    <Routes />
  </MessageProvider>
);

export default App;
