import "./three-scene.scss"

import { useEffect } from "react"
import { useRef } from "react"

import MainThreeScene from "./three-scene-scripts/main-three-scene.js"
import AnimManager from "../../utils/js/anim-manager.js"
import ThreeRobot from "./three-scene-scripts/three-robot.js"
import useStore from "../../store.js"

function ThreeScene() {
  const keyframes = useStore((state) => state.keyframes)
  const testPresentation = useStore((state) => state.testPresentation)
  const threeContainer = useRef(null)


  useEffect(() => {
    MainThreeScene.init(threeContainer.current)
  }, [])

  useEffect(() => {
    AnimManager.updateKeyframes(keyframes)
  }, [keyframes])

  useEffect(() => {
    console.log("changement")
    ThreeRobot.setTestPresentation(testPresentation)
  }, [testPresentation])

  return (
    <div className="three-scene">
      <div className="three-scene_container" ref={threeContainer}></div>

    </div>
  )
}

export default ThreeScene