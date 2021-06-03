import React, { useCallback, useContext } from 'react';
import { MessagesContext } from '../../provider/MessagesProvider';

const Messages = () => {
  const { messages, setMessages } = useContext(MessagesContext);

  const deleteMessage = useCallback((id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  }, [messages]);

  if (!messages[0]) return <h1>No messages found!</h1>;
  return (
    <div>
      <h1 className="text-center font-bold text-lg">Messages</h1>
      { messages.map(({ message, username, time, id }) => (
        <div className="w-full max-w-lg mx-auto my-10 bg-green-100 p-4 rounded-lg">
          <header className="flex justify-between" key={id}>
            <span className="font-bold text-lg text-gray-700">{username}</span>
            <span className="font-semibold text-yellow-600">{time}</span>
          </header>
          <div className="text-center my-6">
            <em className="font-light text-lg">{`"${message}"`}</em>
          </div>
          <div className="text-right">
            <button type="button" onClick={() => deleteMessage(id)}>
              <i className="fa fa-trash-o text-red-600 text-2xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
