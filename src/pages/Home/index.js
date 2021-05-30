import React, { useCallback, useContext, useState } from 'react';
import moment from 'moment/locale/pt-br';
import { MessageForm } from '../../components';
import { MessagesContext } from '../../provider/MessagesProvider';

moment.locale('pt-BR');

const Home = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const { setMessages } = useContext(MessagesContext);

  const saveMessage = useCallback(async (e) => {
    e.preventDefault();
    const time = moment().format('LLL');

    await setMessages((msgs) => [...msgs, { username, message, time }]);
    setMessage('');
    setUsername('');
  }, [username, message]);

  return (
    <div className="w-full max-w-xs mx-auto my-24">
      <MessageForm
        username={username}
        setUsername={setUsername}
        message={message}
        setMessage={setMessage}
        saveMessage={saveMessage}
      />
    </div>
  );
};

export default Home;
