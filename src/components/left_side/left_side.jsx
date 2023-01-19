import "./left_side.scss"
import Select from '../select'
import Input from '../input'
import React from "react";

export default function Left_side() {

  
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

  
    return (
        <div className="positions">
          <div className="positions_noms">
            <Select className={"select positions_noms_nom"} values={[["EF", "EF Position"]]} />
            <Select className={"select positions_noms_unités"} values={[["cm", "cm"]]} />
          </div>
          <div className="positions_lignes">
            <div className="positions_lignes_nom X">
              <div className="positions_lignes_nom_axe">X Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("nom X")}></button>
              {/* <label data-domain="cm">
                <input type="number" min="1" max="100000000"></input>
              </label> */}
              <Input value={"10.33"} unit={"cm"} marginLeft={ "-11%" } />

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
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("nom Y")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange2"></input> */}
              {/* <div className="positions_lignes_nom_number">
                <div>251</div>
                <div className="positions_lignes_nom_number_unité-écrite">cm</div>
              </div> */}
              <Input value={"30.01"} unit={"cm"} marginLeft={ "-11%" } />
            </div>
            <div className="positions_lignes_nom Z">
              <div className="positions_lignes_nom_axe">Z Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("nom Z")}></button>

              {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange3"></input> */}
              {/* <div className="positions_lignes_nom_number">
                <div>789</div>
                <div className="positions_lignes_nom_number_unité-écrite">cm</div>
              </div> */}
              <Input value={"01.06"} unit={"cm"} marginLeft={ "-11%" } />
            </div>
          </div>
        </div>
    )
}