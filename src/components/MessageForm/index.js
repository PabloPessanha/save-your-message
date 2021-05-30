import React from 'react';

const MessageForm = () => (
  <form>
    <input type="text" placeholder="Username" />
    <textarea placeholder="Tell me everything that you always want to say, i will keep your secret. ;)" />
    <button type="submit">Save</button>
  </form>
);

export default MessageForm;
