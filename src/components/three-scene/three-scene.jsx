import "./three-scene.scss"

import { useEffect } from "react"
import { useRef } from "react"

import MainThreeScene from "./three-scene-scripts/main-three-scene.js"
import AnimManager from "../../utils/js/anim-manager.js"
import useStore from "../../store.js"

function ThreeScene() {
  const keyframes = useStore((state) => state.keyframes)
  const threeContainer = useRef(null)

  useEffect(() => {
    console.log('hey')
    MainThreeScene.init(threeContainer.current)
  }, [])

  useEffect(() => {
    console.log('yo')

    AnimManager.updateKeyframes(keyframes)
  }, [keyframes])

  return (
    <div className="three-scene">
      <div className="three-scene_container" ref={threeContainer}></div>

    </div>
  )
}

export default ThreeScene