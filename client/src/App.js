import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // states to copy text
  const [copySucess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  // function to return a success message
  function sucessMsg() {
    return (
      <div className='success-message'>
        <button
          className='cross'
          onClick={closeMsg}
        >
          X
        </button>
        <h1>Copied!</h1>
      </div>
    )
  }

  // function to change classname of the 'X' button
  function closeMsg(e) {
    e.target.parentElement.classList.toggle('close');
  }

  // function to copy text and make success message appear
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(sucessMsg);
  }

  return (
    <div className="App">
      <textarea
        ref={textAreaRef}
        value='contact@asadansari.org'
      />
      <br></br>
      <div>
        <button
          onClick={copyToClipboard}
        >
          Copy Text to Clipboard
        </button>
        {copySucess}
      </div>
    </div>
  );
}

export default App;
