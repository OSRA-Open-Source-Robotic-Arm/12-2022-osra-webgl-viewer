import "./positions.scss"
import TimelineSelect from '../../ui/timeline_select/timeline_select'
import TimelineInput from '../../ui/timeline_input/timeline_input'
import React from "react";
export var keyFrames = [];
//import {keyFrames} from './positions'
export default function Positions() {

  //var keyFrames = [];
  

  function addNode(nodeClassName) {
    if (document.getElementById('drag') != null || document.getElementById('drag') != undefined) {
      const pos_x = document.getElementById('drag').getBoundingClientRect();
      const pos_y = document.getElementsByClassName(nodeClassName)[0].getBoundingClientRect();
      //console.log(document.getElementById('drag').getBoundingClientRect())
      console.log(document.getElementsByClassName(nodeClassName)[0].getBoundingClientRect())

      if (keyFrames.find(el => 
        el.position == nodeClassName && Math.abs(el.getBoundingClientRect().x - pos_x.x) < 50)) {
        return
      }

      const box = document.createElement("div");

      //Put the id of the keyframe
      if (keyFrames.length == 0) {
        box.id = "0";
      }
      else {
        console.log(keyFrames[0].className)
        console.log(keyFrames[keyFrames.length - 1].id[0])
        box.id = parseInt(keyFrames[keyFrames.length - 1].id[0]) + 1;
      }
      box.x = pos_x.x;
      box.onclick = function() { alert('blah'); };//onclick of the keyframe
      
      box.className = "box";
      box.position = nodeClassName
      //box.class = "box";
      box.style.zIndex = 5;
      box.style.position = "absolute";
      box.style.left = (100 * pos_x.x / window.innerWidth + .3) +'vw';
      box.style.top = pos_y.y + 14 +'px';
      keyFrames.push(box)
      document.body.appendChild(box);
    //box.width = '3px';
    }
  }

  
    return (
        <div className="positions">
          <div className="positions_noms">
            <TimelineSelect select_className={"select positions_noms_nom"} select_values={[["EF", "EF Position"]]} />
            <TimelineSelect select_className={"select positions_noms_unités"} select_values={[["cm", "cm"]]} />
          </div>
          <div className="positions_lignes">
            <div className="positions_lignes_nom X">
              <div className="positions_lignes_nom_axe">X Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("X")}></button>
              {/* <label data-domain="cm">
                <input type="number" min="1" max="100000000"></input>
              </label> */}
              <TimelineInput input_value={"10.33"} unit={"cm"} input_marginLeft={ "-11%" } />

                {/* <input type="number" min="1" max="100000000"></input>

                <span style="margin-left:10px;">lb</span> */}

              {/* <div className="positions_lignes_nom_number">
                <div>310</div>
                <div className="positions_lignes_nom_number_unité-écrite">cm</div>
              </div> */}
            </div>
            <div className="positions_lignes_nom Y">
              <div className="positions_lignes_nom_axe">Y Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("Y")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange2"></input> */}
              {/* <div className="positions_lignes_nom_number">
                <div>251</div>
                <div className="positions_lignes_nom_number_unité-écrite">cm</div>
              </div> */}
              <TimelineInput input_value={"30.01"} unit={"cm"} input_marginLeft={ "-11%" } />
            </div>
            <div className="positions_lignes_nom Z">
              <div className="positions_lignes_nom_axe">Z Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("Z")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange3"></input> */}
              {/* <div className="positions_lignes_nom_number">
                <div>789</div>
                <div className="positions_lignes_nom_number_unité-écrite">cm</div>
              </div> */}
              <TimelineInput input_value={"01.06"} unit={"cm"} input_marginLeft={ "-11%" } />
            </div>
          </div>
        </div>
    )
}