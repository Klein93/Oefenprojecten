import React from 'react';
import Homepage from "./components/Homepage"
import moonimage from "./images/moonimage.png"
import lupeimg from "./images/lupe.png"


import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage moonimg={moonimage} lupeimg={lupeimg} />
    </div>
  );
}

export default App;
