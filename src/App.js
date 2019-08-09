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
      <div className="bodyDiv">
        <div className="bodyWrapper">
          <ul className="circle-container">

          <li>
              <img src={arrow} className="arrowImg1" alt="arrow"></img>
            </li>
            <li>
          <div className="rockTypeDiv1">
            <div className="hiddenDiv">
            <img src={granite} alt="Igneous" className="rockTypeImg"></img>
            <div className="rockText">
            <h3>Igneous</h3>
            <hr></hr>
            <p className="">Igneous rocks are fromed when magma (below ground, intrusive) or lava (above ground, extrusive) cools. Magama can form from:
            <br></br><br></br>
            <b>Decompression Melting,</b> where the Earths mantle is uplifted causing a reduction in pressure and allowing the mantle too melt. 
            <br></br><br></br>
            Through <b>Flux Melting,</b> where water is introduced into the mantle lowering the melting point. 
            <br></br><br></br>
            And lastly through <b>Transfer of Heat</b> where a new heat source intrudes cold crust causing the crust to melt.</p>
            </div>
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
            <h3>Metamorphic</h3>
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
            <h3>Sedimentary</h3>
            <p className="rockText">hasdfasdfa lorem</p>
          </div>
          </div>
            </li>

          </ul>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
