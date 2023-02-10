import "./timeline_progress_bar.scss"
import React, { useEffect, useRef } from "react";
import useStore from "../../../store";
import { keyFrames } from "../positions/positions"

//import Draggable from 'react-draggable';
import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default function TimelineProgressBar() {
  var time = 35;//useStore.getState().animTime;
  //var draggableOrNot = true;
  var timeline_draggable_first_position = 0;

  /*function draggableOrNot() {
    return true
  }*/

  function five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1;
    }
    return number;
  }

  function log() {//A supprimer
    console.log(window.innerWidth)
    console.log(100 * document.getElementById('drag').getBoundingClientRect().x / window.innerWidth)
    console.log("ici")

    console.log((document.getElementById('drag').getBoundingClientRect().x - timeline_draggable_first_position) * .5 * .73 / 35)
    console.log(timeline_draggable_first_position)

    if (keyFrames.length != 0) {
      console.log((document.getElementById('drag').getBoundingClientRect().x - keyFrames[0].getBoundingClientRect().x - 1.75) / 12)
    }

  }

  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  useEffect(() => {
    timeline_draggable_first_position = document.getElementById('drag').getBoundingClientRect().x;

    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "x",
      bounds: { top: 100, left: 0, width: window.innerWidth / (1707 / 630), height: 800 },
      onDragEnd() {
        console.log(this);
      }
    });
  }, []);

  window.addEventListener("resize", (event) => {//To resize the width of the draggable white line when the screen size changes
    dragInstance.current[0].vars.bounds.width = window.innerWidth / (1707 / 630);
  });

  return (
    <div className="reader">
      <div className="reader_background">
      </div>
      <div className="reader_secondes">
        {[...Array(five_multiple(time + 5) / 5).keys()].map(x => x * 5).map((second, index) => (
          <div key={index}>{second}</div>
        ))}
        <div className="reader_drag-pos" id="drag-pos" onClick={() => log()}>
          {/* <Draggable onStart={() => draggableOrNot()}
                id="draggable"
                axis="x"
                bounds={{left: 0, top: 0, right: 630, bottom: 0}}
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                scale={1}>
                    <div className="drag">
                        <div className="handle">
                            <div>
                                <div className="white-line">
                                    <img src="Group 1.svg" draggable="false" id="drag" className="drag" alt="Girl in a jacket" width="15" height="20"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable> */}
          <div className="drag">
            <div className="draggable" ref={dragTarget}>
              <div>
                <div className="white-line">
                  <img src="Group 1.svg" draggable="false" id="drag" className="drag" alt="Girl in a jacket" width="15" height="20"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reader_lecteur">
        {["first-black-line", "b", "c"].map((index) => (
          <div className="reader_lecteur_black-line" key={index} id={index}></div>
        ))}
      </div>
    </div>
  )
}