import "./three-scene.scss"

import { useEffect } from "react"
import { useRef } from "react"

import MainThreeScene from "./three-scene-scripts/main-three-scene.js"
import ThreeRobot from "./three-scene-scripts/three-robot"
import AnimManager from "../../utils/js/anim-manager.js"
import useStore from "../../store.js"

function ThreeScene() {
  const keyframes = useStore((state) => state.keyframes)
  const currentTime = useStore((state) => state.currentTime)
  const setCurrentTime = useStore((state) => state.setCurrentTime)
  const setAnimData = useStore((state) => state.setAnimData)
  const animData = useStore((state) => state.animData)
  const threeContainer = useRef(null)



  useEffect(() => {
    MainThreeScene.init(threeContainer.current)
    AnimManager.addonUpdateCallBack(onTlUpdate, "animUpdate")
  }, [])

  function onTlUpdate(data) {
    setAnimData(data.animData)
    setCurrentTime(data.currentTime)

  }

  useEffect(() => {
    ThreeRobot.updateJoints(animData)
  }, [animData])

  useEffect(() => {
    AnimManager.timeline.time(currentTime)
  }, [currentTime])

  useEffect(() => {
    AnimManager.updateKeyframes(keyframes)
  }, [keyframes])

  return (
    <div className="three-scene">
      <div className="three-scene_container" ref={threeContainer}></div>
    </div>
  )
}

export default ThreeScene