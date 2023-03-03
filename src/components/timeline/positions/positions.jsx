import "./positions.scss"
import TimelineSelect from '../../ui/timeline_select/timeline_select'
import TimelineInput from '../../ui/timeline_input/timeline_input'
import React, { useEffect, useState } from "react";
import useStore from "../../../store";
import { timeline_draggable_first_position } from "../animation_controller/animation_controller";

export var keyFrames = [];/*{
  arm_position,
  first_joint,
  second_joint,
  third_joint,
};*/

//Strategy : 
//-Put in store the keyFrames with the value of the select array
//-Put at the beginning of each doc 


/*
Creer une classe timeline-incr-manager.js ou je mets une fct update permettant de rappeler la fonction. 
Utiliser dans mon timeline-progress.. la fonction dans un useEffect ()
*/

export default function Positions() {
  const [selectValue, setSelectValue] = useState('');
  
  const animTime = useStore((state) => state.animTime)
  const armPosition = useStore((state) => state.armPosition)
  const setArmPosition = useStore((state) => state.setArmPosition)

  useEffect(() => {
  }, [animTime]);
  useEffect(() => {
  }, [armPosition]);

  var currentId = -1;
  const position_options = 
  [
    ["arm_position", "Arm Position"],
    ["first_joint", "Axe 1"],
    ["second_joint", "Axe 2"],
    ["third_joint", "Axe 3"],
  ]

  function five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1;
    }
    return number;
  }

  function addNode(nodeClassName) {
    const transformed_animTime = five_multiple(Math.ceil(animTime));
    console.log(transformed_animTime)
    if (document.getElementById('drag') != null || document.getElementById('drag') != undefined) {
      const pos_x = document.getElementById('drag').getBoundingClientRect();
      const pos_y = document.getElementsByClassName(nodeClassName)[0].getBoundingClientRect();

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
      box.firstAnimTime = transformed_animTime;
      box.x = pos_x.x;
      box.prevNext = pos_x.x;
      box.onclick = function() { currentId = parseInt(box.id); };//onclick of the keyframe
      
      box.className = "box " + document.getElementById;
      box.arm_position = armPosition;
      box.position = nodeClassName
      //box.class = "box";
      box.style.zIndex = 5;
      box.style.position = "absolute";
      box.style.left = (100 * (((pos_x.x - timeline_draggable_first_position) /** 35 / transformed_animTime*/) + timeline_draggable_first_position) / window.innerWidth + .3) +'vw';
      box.style.top = pos_y.y + 14 +'px';

      box.X_position = document.getElementById("axe-x").input_value
      box.Y_position = document.getElementById("axe-y").input_value
      box.Z_position = document.getElementById("axe-z").input_value

      box.X_unit = document.getElementById("axe-x").unit
      box.Y_unit = document.getElementById("axe-y").unit
      box.Z_unit = document.getElementById("axe-z").unit

      keyFrames.push(box)
      document.body.appendChild(box);
      console.log(box.arm_position)
    //box.width = '3px';
    }
  }

  function deleteNode(idNode) {
    if (idNode == -1) return
    //Delete from keyFrames
    keyFrames.splice(idNode, 1);
    //Select and remove node
    const nodeToDelete = document.getElementById(idNode.toString());
    nodeToDelete.remove()
    //Reasign ids
    for (let i = idNode; i < keyFrames.length; i++) {
      keyFrames[i].id = (keyFrames[i].id - 1).toString()
    }
    currentId = -1;
  }

  const handleSelectChange = (event) => {
    //Only show the correct keyframes
    for (let i = 0; i < keyFrames.length; i++) {
      if (keyFrames[i].arm_position == armPosition) {
        document.getElementById(i.toString()).style.display = 'none';
      }
      else if (keyFrames[i].arm_position == event) {
        document.getElementById(i.toString()).style.display = 'block';
      }
    }

    //Change value
    setSelectValue(event);

    setArmPosition(event)
  };

  useEffect(() => {
  }, []);

  
    return (
        <div className="positions">
          <div className="positions_noms">
            <TimelineSelect select_id="axe_selector" select_className={"select positions_noms_nom"} select_values={position_options} onChangeCallback={handleSelectChange} onSelectChange/>
            <TimelineSelect select_className={"select positions_noms_unités"} select_values={[["cm", "cm"]]} />
          </div>
          <div className="positions_lignes">
            <div className="positions_lignes_nom X">
              <div className="positions_lignes_nom_axe">X Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("X")}></button>
              <TimelineInput input_id="axe-x" input_value={"10.33"} unit={"cm"} input_marginLeft={ "-11%" } />
            </div>
            <div className="positions_lignes_nom Y">
              <div className="positions_lignes_nom_axe">Y Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("Y")}></button>
              <TimelineInput input_id="axe-y" input_value={"30.01"} unit={"cm"} input_marginLeft={ "-11%" } />
            </div>
            <div className="positions_lignes_nom Z">
              <div className="positions_lignes_nom_axe">Z Position</div>
              <div className="positions_lignes_nom_line"></div>
              <button className="positions_lignes_nom_add-position" onClick={() => addNode("Z")}></button>
              <TimelineInput input_id="axe-z" input_value={"01.06"} unit={"cm"} input_marginLeft={ "-11%" } />
            </div>
            <div className="positions_lignes_delete-keyFrame">
              <button className="positions_lignes_delete-keyFrame_button" onClick={() => deleteNode(currentId)}>
                Delete keyFrame
              </button>
            </div>
          </div>
        </div>
    )
}