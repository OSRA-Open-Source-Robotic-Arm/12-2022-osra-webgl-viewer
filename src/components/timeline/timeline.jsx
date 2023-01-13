import "./timeline.scss"
import Draggable from 'react-draggable';
import { gsap } from "gsap";

function Timeline() {
  function addNode(className) {
    if (document.getElementById('drag') != null || document.getElementById('drag') != undefined) {
      const pos_x = document.getElementById('drag').getBoundingClientRect();
      const pos_y = document.getElementsByClassName(className)[0].getBoundingClientRect();
      //console.log(document.getElementById('drag').getBoundingClientRect())
      console.log(document.getElementsByClassName(className)[0].getBoundingClientRect())
      const box = document.createElement("div");
      box.id = "box";
      box.className = "box";
      //box.class = "box";
      box.style.zIndex = 5;
      box.style.position = "absolute";
      box.style.left = pos_x.x + 5 +'px';
      box.style.top = pos_y.y + 6 +'px';
      document.body.appendChild(box);
    //box.width = '3px';
    }
  }

  function play() {
    //gsap.from('#drag-pos', { duration: 1, x: '200px', delay: .5 })
    gsap.to('#drag-pos'
                , { duration: 35, x: '98%', delay: .5  })
  }



  return (
    <div className="timeline">
        <div className="timeline-positions">
          <div className="timeline-noms">
            <select className="select nom-pos">
              <option value="EF">EF Position</option>
            </select>
            <select className="select unités">
              <option value="cm">cm</option>
            </select>
          </div>
          <div className="lignes">
            <div className="nom X">
              <div className="nom-axe">X Position</div>
              <div className="line"></div>
              <button className="add-position" onClick={() => addNode("nom X")}></button>
              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange1"></input> */}

              <div className="number"><div>310</div><div className="unité-écrite">cm</div></div>
            </div>
            <div className="nom Y">
              <div className="nom-axe">Y Position</div>
              <div className="line"></div>
              <button className="add-position" onClick={() => addNode("nom Y")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange2"></input> */}
              <div className="number"><div>251</div><div className="unité-écrite">cm</div></div>
            </div>
            <div className="nom Z">
              <div className="nom-axe">Z Position</div>
              <div className="line"></div>
              <button className="add-position" onClick={() => addNode("nom Z")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange3"></input> */}
              <div className="number"><div>789</div><div className="unité-écrite">cm</div></div>
            </div>
          </div>
        </div>

        <div className="reader">
          <div className="background">
          </div>
          <div className="secondes">
            {[0, 5, 10, 15, 20, 25, 30, 35].map((second, index) => (
              <div key={index}>{second}</div>
            ))}
            <div className="drag-pos" id="drag-pos">
              <Draggable
              id="draggable"
                axis="x"
                bounds="parent"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                scale={1}>
                <div className="drag">
                  <div className="handle"><div>
                    <div className="white-line">
                  <img src="Group 1.svg" draggable="false" id="drag" className="drag" alt="Girl in a jacket" width="15" height="20"></img>
                  </div>
                  </div></div>
                </div>
              </Draggable>
            </div>
          </div>
          <div className="lecteur">
            {["first-black-line", "b", "c"].map((index) => (
              <div className="black-line" key={index} id={index}></div>
            ))}
          </div>
        </div>

        <div className="preview-positions">
          <div className="preview-noms" style={{ alignSelf: "center" }}>
            <div style={{ fontSize: ".65rem", marginLeft: ".5rem" }}>
              Preview
            </div>
            <div style={{ display: "flex" }}>
              <div className="select" style={{ marginRight: ".5rem", alignSelf: "center", padding: "0.25rem" }}>
                12’021’’
              </div>
              <button className="previous"></button>
              <button className="play" onClick={play}></button>
              <button className="next"></button>
            </div>
          </div>
          
          <div className="lignes">
            <div className="nom X">
              <div className="nom-axe">Animation length</div>
              <div className="line line2"></div>
              <div className="number"><div>35</div><div className="unité-écrite">sec</div></div>
            </div>

            <div className="nom X">
              <div className="nom-axe">Send Data</div>
              <div className="line line3"></div>
              <div className="number send">Send</div>
            </div>
          </div>
        </div>
      </div>
  );
  
}

export default Timeline;