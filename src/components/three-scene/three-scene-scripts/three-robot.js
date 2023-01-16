import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import MyGUI from "../../../utils/js/my-gui.js"
import * as THREE from 'three'

class ThreeRobot {
  constructor() {

  }

  init(scene) {
    this.scene = scene
    this.modelLoader = new GLTFLoader()
    // const robotGUIFolder = MyGUI.addFolder("Robot")
    this.modelLoader.load("./assets/3d/pretotype-arm.glb", (glb) => {
      this.robotRoot = glb.scene.children[0]
      this.scene.add(this.robotRoot)

      this.robotRoot.traverse(child => {
        const mat = new THREE.MeshNormalMaterial()
        if (child.isMesh) {
          child.material = mat

          if (child.name === "j0") {
            MyGUI.add(child.rotation, "y", 0, Math.PI * 2).name("Joint 0 rotation")
          }
          if (child.name === "j1") {
            MyGUI.add(child.rotation, "z", -Math.PI, Math.PI).name("Joint 1 rotation")
          }
          if (child.name === "j2") {
            MyGUI.add(child.rotation, "z", 0, Math.PI * 2).name("Joint 2 rotation")
          }
        }
      })
    })
  }

  update() {

  }

  bind() {

  }
}

const _instance = new ThreeRobot()
export default _instance