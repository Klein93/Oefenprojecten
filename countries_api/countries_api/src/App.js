import React from 'react';
import Homepage from "./components/Homepage"
import moonimage from "./images/moonimage.png"


import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage moonimg={moonimage} />
    </div>
  );
}

export default App;
