import React from 'react';
import PropTypes from 'prop-types';

const MessageForm = ({
  username,
  setUsername,
  message,
  setMessage,
  saveMessage,
}) => (
  <form className="bg-white shadow-xl border rounded px-4 pt-6 pb-8 my-24">
    <div className="mb-8">
      <label htmlFor="username">
        <span className="text-gray-700 font-bold mb-2">Username</span>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </label>
    </div>
    <label className="block" htmlFor="message">
      <span className="text-gray-700 font-bold mb-2">Textarea</span>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        id="message"
        placeholder="Tell me everything that you always want to say, i will keep your secret. ;)"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-textarea mt-1 block w-full"
        rows="4"
      />
    </label>
    <button
      onClick={saveMessage}
      type="submit"
      className="bg-gray-300 hover:bg-gray-200 text-gray-600 hover:text-gray-400 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-300 rounded mt-4"
    >
      Save
    </button>
  </form>
);

export default MessageForm;

MessageForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
};
