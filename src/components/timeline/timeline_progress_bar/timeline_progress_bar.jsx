import "./timeline_progress_bar.scss"
import React, { useEffect, useRef } from "react";
import useStore from "../../../store";
import { keyFrames } from "../positions/positions"
import _instance from "./timeline_progress_bar-scripts/timeline-incr-manager"

//import Draggable from 'react-draggable';
import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default function TimelineProgressBar() {
  const animTime = useStore((state) => state.animTime)
  var time = 35;//useStore.getState().animTime;
  //var draggableOrNot = true;
  var timeline_draggable_first_position = 0;

  /*function draggableOrNot() {
    return true
  }*/

  function onTlUpdate(data) {
    console.log(data)
  }

  function five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1;
    }
    return number;
  }

  var timeIntervalles = _instance.update(animTime);

  var timeline_draggable_first_position = 0;

  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  useEffect(() => {
    time = document.getElementById('animation_time').input_value;

    timeline_draggable_first_position = document.getElementById('drag').getBoundingClientRect().x;

    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "x",
      bounds: { top: 100, left: 0, width: window.innerWidth / (1707 / 630), height: 800 },
    });
  }, []);

  useEffect(() => {
    var timeIntervalles = _instance.update(animTime);
  }, [animTime]);

  window.addEventListener("resize", (event) => {//To resize the width of the draggable white line when the screen size changes
    dragInstance.current[0].vars.bounds.width = window.innerWidth / (1707 / 630);
  });

  return (
    <div className="reader">
      <div className="reader_background">
      </div>
      <div className="reader_secondes">
        {timeIntervalles.map(x => x * 5).map((second, index) => (
          <div key={index}>{second}</div>
        ))}
        <div className="reader_drag-pos" id="drag-pos">
          <div className="drag">
            <div className="draggable" ref={dragTarget}>
              <div>
                <div className="white-line">
                  <img src="Group1.svg" draggable="false" id="drag" className="drag" alt="Girl in a jacket" width="15" height="20"></img>
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