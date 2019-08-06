import React from 'react';
import './App.css';
import granite from './assests/images/granite1.jpg';
import gneiss from './assests/images/gneiss1.jpg';
import sedimentary from './assests/images/sedimentary1.jpg';
import arrow from './assests/images/arrow.png';

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>The Rock Cycle</h1>
      </header>
      <body>
        <div className="bodyWrapper">
          <ul className="circle-container">

          <li>
              <img src={arrow} className="arrowImg1" alt="arrow"></img>
            </li>
            <li>
          <div className="rockTypeDiv1">
            <div className="hiddenDiv">
            <img src={granite} alt="Igneous" className="rockTypeImg"></img>
            <p className="rockText">hasdfasdfa</p>
            </div>
          </div>
            </li>
            <li>
              <img src={arrow} className="arrowImg2" alt="arrow"></img>
            </li>
            <li>
          <div className="rockTypeDiv2">
            <div className="hiddenDiv">
            <img src={gneiss} alt="Metamorphic" className="rockTypeImg"></img>
            <p className="rockText">hasdfasdfa</p>
          </div>
          </div>
            </li>
            <li>
              <img src={arrow} className="arrowImg3" alt="arrow"></img>
            </li>
            <li>
            <div className="rockTypeDiv3">
          <div className="hiddenDiv">
            <img src={sedimentary} alt="Sedimentary" className="rockTypeImg"></img>
            <p className="rockText">hasdfasdfa</p>
          </div>
          </div>
            </li>

          </ul>
        </div>
        <div>

        </div>
      </body>
    </div>
  );
}

export default App;
