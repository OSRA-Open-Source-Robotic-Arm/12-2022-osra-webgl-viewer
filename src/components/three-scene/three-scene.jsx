import "./three-scene.scss"

import { useEffect } from "react";
import { useRef } from "react";

import MainThreeScene from "./three-scene-scripts/main-three-scene.js"

function ThreeScene() {
  const threeContainer = useRef(null)

  useEffect(() => {
    MainThreeScene.init(threeContainer.current)
  }, [])

  return (
    <div className="three-scene">
      <div className="three-scene_container" ref={threeContainer}></div>

    </div>
  );
}

export default ThreeScene;