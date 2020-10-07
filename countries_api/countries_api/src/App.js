import React from 'react';
import Homepage from "./components/Homepage"
// import moonimage from "./images/moonimage.png"
// import lupeimg from "./images/lupe.png"
import singleCountryDisplay from "./components/singleCountryDisplay"
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (

    <Router>


      {Homepage}



      <Route path="/" exact component={Homepage} />
      <Route path="/singleCountry" component={singleCountryDisplay} />
    </Router>



    // <div className="App">
    //   <Homepage moonimg={moonimage} lupeimg={lupeimg} />
    // </div>
  );
}

export default App;
