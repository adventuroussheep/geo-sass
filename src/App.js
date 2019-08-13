import React from "react";
import "./App.css";
import granite from "./assests/images/granite1.jpg";
import gneiss from "./assests/images/gneiss1.jpg";
import sedimentary from "./assests/images/sedimentary1.jpg";
import arrow from "./assests/images/arrow.png";

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
              <img src={arrow} className="arrowImg1" alt="arrow" />
            </li>
            <li>
              <div className="rockTypeDiv1">
                <div className="hiddenDiv">
                  <img src={granite} alt="Igneous" className="rockTypeImg" />
                  <div className="rockText">
                    <h3>Igneous</h3>
                    <hr />
                    <p className="">
                      Igneous rocks are fromed when magma (below ground,
                      intrusive) or lava (above ground, extrusive) cools.
                      Igneous rocks can be turned into Metamorphic rocks with
                      the introduction of heat and pressure. They can become
                      Sedimentary rocks from Weathering and Erosion and the
                      eventual Compaction and Cementation of the sediments.
                      Lastly they can turn into a new type of Igneous rock from
                      remelting into magma and cooling.
                      {/* <b>Decompression Melting,</b> where the Earths mantle is uplifted causing a reduction in pressure and allowing the mantle too melt. 
            <br></br><br></br>
            Through <b>Flux Melting,</b> where water is introduced into the mantle lowering the melting point. 
            <br></br><br></br>
            And lastly through <b>Transfer of Heat</b> where a new heat source intrudes cold crust causing the crust to melt.</p> */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src={arrow} className="arrowImg2" alt="arrow" />
            </li>
            <li>
              <div className="rockTypeDiv2">
                <div className="hiddenDiv">
                  <img src={gneiss} alt="Metamorphic" className="rockTypeImg" />
                  <div
                    className="rockText"
                    onMouseOver="this.style.background='pink'"
                  >
                    <h3>Metamorphic</h3>
                    <hr />
                    <p className="">
                      Metamorphic rocks are formed when either a Sedimentary or
                      Igneous rock undergo imense amounts of heat and pressure.
                      The parent material (protolith) determines what type of
                      Metamorphic rock is produced. Metamorphic rocks can be
                      subjected to Weathering and Erosion and can form
                      Sedimentary rocks. They can also be remelted into magma
                      and cool into Ignous rocks.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src={arrow} className="arrowImg3" alt="arrow" />
            </li>
            <li>
              <div className="rockTypeDiv3">
                <div className="hiddenDiv">
                  <img
                    src={sedimentary}
                    alt="Sedimentary"
                    className="rockTypeImg"
                  />
                  <div className="rockText">
                    <h3>Sedimentary</h3>
                    <hr />
                    <p className="">
                      Sedimentary rocks are formed from the Compaction and
                      Cemention of sediments from the Weathering and Erosion and
                      of Igneous, Metamorphic, and other Sedimentary rocks.
                      Sedimentary rocks can become Metamorphic rocks when
                      exposed to heat and pressure. If heat and pressure are
                      great enough Sedimentary rocks can be remelted into magma
                      and cool into an Igneous rock.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </div>
  );
}

export default App;
