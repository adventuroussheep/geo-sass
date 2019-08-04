import React from 'react';
import './App.css';
import granite from './assests/images/granite.jpg';
import gneiss from './assests/images/gneiss1.jpg';
import sedimentary from './assests/images/sedimentary.jpg';

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>The Rock Cycle</h1>
      </header>
      <body>
        <div className="bodyWrapper">
          {/* <ul> */}

          <div className="rockTypeDiv">
            {/* <li> */}
            <img src={granite} alt="Igneous" className="rockTypeImg"></img>
            {/* </li> */}
          </div>
          <div className="rockTypeDiv">
            {/* <li> */}
            <img src={gneiss} alt="Metamorphic" className="rockTypeImg"></img>
            {/* </li> */}
          </div>
          <div className="rockTypeDiv">
            {/* <li> */}
            <img src={sedimentary} alt="Sedimentary" className="rockTypeImg"></img>
            {/* </li> */}
          </div>

          {/* </ul> */}
        </div>
        <div>

        </div>
      </body>
    </div>
  );
}

export default App;
