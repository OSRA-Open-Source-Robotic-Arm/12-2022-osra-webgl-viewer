import "./timeline_progress_bar.scss"
import React, { useEffect, useRef } from "react";
import useStore from "../../../store";
import { keyFrames } from "../positions/positions"
import AnimManager from "../../../utils/js/anim-manager.js"
import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default function TimelineProgressBar() {
  const animTime = useStore((state) => state.animTime)
  var time = 35;//useStore.getState().animTime;
  //var draggableOrNot = true;
  var timeline_draggable_first_position = 0;
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  useEffect(() => {
    timeline_draggable_first_position = document.getElementById('drag').getBoundingClientRect().x;

    // dragInstance.current = Draggable.create(dragTarget.current, {
    //   type: "x",
    //   bounds: { top: 100, left: 0, width: window.innerWidth / (1707 / 630), height: 800 },
    //   onDragEnd() {
    //     console.log(this);
    //   }
    // });

    AnimManager.addonUpdateCallBack(onTlUpdate, "timeline_progress_bar_update")
  }, []);


  function onTlUpdate(data) {
    console.log(AnimManager.timeline.time())
    dragTarget.current.style = `transform: translate(${AnimManager.timeline.time() * 100}px, -10px);`
  }

  function five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1;
    }
    return number;
  }

  // var timeIntervalles = _instance.update(animTime);

  var timeline_draggable_first_position = 0;


  useEffect(() => {
    // var timeIntervalles = _instance.update(animTime);
  }, [animTime]);

  window.addEventListener("resize", (event) => {//To resize the width of the draggable white line when the screen size changes
    dragInstance.current[0].vars.bounds.width = window.innerWidth / (1707 / 630);
  });

  return (
    <div className="reader">
      <div className="reader_background">
      </div>
      <div className="reader_secondes">
        {/* {timeIntervalles.map(x => x * 5).map((second, index) => (
          <div key={index}>{second}</div>
        ))} */}
        <div className="reader_drag-pos" id="drag-pos">
          <div className="drag" ref={dragTarget}>
            <div className="draggable" >
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