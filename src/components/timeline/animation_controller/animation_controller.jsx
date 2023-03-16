import "./animation_controller.scss"
import React, { useEffect, useRef, useState } from "react"
import TimelineInput from '../../ui/timeline_input/timeline_input'
import useStore from "../../../store"
import { gsap } from "gsap"

import AnimManager from "../../../utils/js/anim-manager.js"
export var timeline_draggable_first_position = 0

export default function AnimationController() {
  const [inputValue, setInputValue] = useState('')
  const animTime = useStore((state) => state.animTime)
  const [isPlaying, setIsPlaying] = useState(false)
  const setAnimTime = useStore((state) => state.setAnimTime)
  //Maintenant, je peux utilier setAnmiTime(time)
  const armPosition = useStore((state) => state.armPosition)



  useEffect(() => {
    // AnimManager.timeline.duration(animTime)
  }, [animTime])
  useEffect(() => {
  }, [armPosition])



  function play(time) {
    AnimManager.timeline.play()
    setIsPlaying(true)

    // gsap.to('.draggable'
    //   , { duration: time, x: '36.75vw', delay: .5 })
  }

  function pause() {
    AnimManager.timeline.pause()
    setIsPlaying(false)
  }

  function next() {

  }

  function prev() {
  }

  function five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1
    }
    return number
  }

  const handleInputChange = (event) => {
    // setInputValue(event)
    // setAnimTime(event)//Pas top, le mieux serait d'utiliser inputValue, mais il ne renvoie pas la bonne valeur

    // for (let i = 0; i < keyFrames.length; i++) {
    //   const newPosPx = /*(100 * */(((keyFrames[i].x - timeline_draggable_first_position) * keyFrames[i].firstAnimTime / five_multiple(Math.ceil(event)))
    //     + timeline_draggable_first_position)/* / window.innerWidth + .3)*//* +'vw'*/
    //   const newPosVw = (newPosPx * 100 / window.innerWidth + .3)

    //   if (newPosVw <= (window.innerWidth - timeline_draggable_first_position) * 100 / window.innerWidth) {
    //     document.getElementById(i.toString()).style.left = newPosVw + 'vw'
    //     keyFrames[i].prevNext = (((keyFrames[i].x - timeline_draggable_first_position) * keyFrames[i].firstAnimTime / five_multiple(Math.ceil(event)))
    //       + timeline_draggable_first_position)
    //     if (keyFrames[i].arm_position === armPosition) document.getElementById(i.toString()).style.display = 'block'
    //   }
    //   else {
    //     document.getElementById(i.toString()).style.display = 'none'
    //   }
    // }
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

          {isPlaying
            ? <button className="preview_noms_pause" onClick={() => pause()}></button>
            : <button className="preview_noms_play" onClick={() => play()}></button>
          }
          <button className="preview_noms_next" onClick={() => next()}></button>
        </div>
      </div>

      <div className="preview_lignes">
        <div className="preview_lignes_nom X">
          <div className="preview_lignes_nom_axe">Animation length</div>
          <div className="preview_lignes_nom_line line2"></div>
          <TimelineInput input_id="animation_time" input_value={animTime} unit={"sec"} input_marginLeft={"-11%"} onChangeCallback={handleInputChange} />
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