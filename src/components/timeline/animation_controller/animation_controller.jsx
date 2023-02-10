import "./animation_controller.scss"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TimelineInput from '../../ui/timeline_input/timeline_input'
import useStore from "../../../store";
import { keyFrames } from "../positions/positions";

export default function AnimationController() {
  var time = 25;
  var timeline_draggable_first_position = 0;
  const animTime = useStore((state) => state.animTime)

  useEffect(() => {
    timeline_draggable_first_position = document.getElementById('drag').getBoundingClientRect().x;
  }, []);

  useEffect(() => {
  }, [animTime]);


  function play(time) {
    //gsap.from('#drag-pos', { duration: 1, x: '200px', delay: .5 })
    gsap.to('.draggable'
      , { duration: time, x: '36.75vw', delay: .5 })
  }

  function next() {
    if (keyFrames.length == 0) return

    //gsap.from('#drag-pos', { duration: 1, x: '200px', delay: .5 })
    const cursorPosition = document.getElementsByClassName('draggable')[0].getBoundingClientRect().x;
    console.log(cursorPosition)
    console.log(keyFrames[0].x)
    const newPosition = keyFrames.reduce(function (prev, curr) {
      return (prev.x + 2.5 > cursorPosition + 10 && Math.abs(prev.x + 2.5 - cursorPosition) < Math.abs(curr.x + 2.5 - cursorPosition)) ? prev : curr;
    }).x;
    if (newPosition + 2.5 <= cursorPosition) {
      return
    }
    gsap.to('.draggable'
      , { duration: '2', x: (newPosition - timeline_draggable_first_position), delay: .5 })
  }

  function prev() {
    if (keyFrames.length == 0) {
      gsap.to('.draggable'
        , { duration: '2', x: 0, delay: .5 })
      return
    }
    //gsap.from('#drag-pos', { duration: 1, x: '200px', delay: .5 })
    const cursorPosition = document.getElementsByClassName('draggable')[0].getBoundingClientRect().x;

    const newPosition = keyFrames.reduce(function (prev, curr) {
      return (curr.x + 2.5 < cursorPosition && Math.abs(prev.x + 2.5 - cursorPosition) > Math.abs(curr.x + 2.5 - cursorPosition)) ? curr : prev;
    }).x;
    console.log(newPosition)
    console.log(cursorPosition)
    if (newPosition + 2.5 >= cursorPosition) {
      gsap.to('.draggable'
        , { duration: '2', x: 0, delay: .5 })
      return
    }
    gsap.to('.draggable'
      , { duration: '2', x: (newPosition - timeline_draggable_first_position), delay: .5 })
  }

  function onChangeAnimationTime(newTimeValue) {
    useStore.setState({ animTime: newTimeValue })
    console.log(useStore.getState().animTime)
  }

  return (
    <div className="preview">
      <div className="preview_noms" style={{ alignSelf: "center" }}>
        <div style={{ fontSize: ".65rem", marginLeft: ".5rem" }}>
          Preview
                </div>
        <div style={{ display: "flex" }}>
          <div className="preview_noms_select" style={{ marginRight: ".5rem", alignSelf: "center", padding: "0.25rem" }}>
            12’021’’
                    </div>
          <button className="preview_noms_previous" onClick={() => prev()}></button>
          <button className="preview_noms_play" onClick={() => play(time)}></button>
          <button className="preview_noms_next" onClick={() => next()}></button>
        </div>
      </div>

      <div className="preview_lignes">
        <div className="preview_lignes_nom X">
          <div className="preview_lignes_nom_axe">Animation length</div>
          <div className="preview_lignes_nom_line line2"></div>
          <TimelineInput id="animation_time" input_value={animTime} unit={"sec"} input_marginLeft={"-11%"} onChangeCallback={onChangeAnimationTime} />
          {/* <div className="preview_lignes_nom_number">
                <div>35</div>
                <div className="preview_lignes_nom_number_unité-écrite">sec</div>
              </div> */}
        </div>

        <div className="preview_lignes_nom X">
          <div className="preview_lignes_nom_axe">Send Data</div>
          <div className="preview_lignes_nom_line line3"></div>
          <div className="preview_lignes_nom_number send">Send</div>
        </div>
      </div>
    </div>
  )
}