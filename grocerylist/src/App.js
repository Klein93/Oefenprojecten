import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Listcontainer from "./components/Listcontainer"
import checkImg from "./images/check.jpg";
import plusImg from "./images/plus.png";

function App() {
  return (
    <div className="App">
      <Listcontainer plusImg={plusImg} checkImg={checkImg} />
    </div>
  );
}

export default App;
