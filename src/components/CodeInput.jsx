import React, { useState } from 'react';

function CodeInput({ onCodeSubmit }) {
  const [inputCode, setInputCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit(inputCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder="Enter your code here"
        rows="10"
        cols="50"
      />
      <br />
      <button type="submit">Submit Code</button>
    </form>
  );
}

export default CodeInput;
