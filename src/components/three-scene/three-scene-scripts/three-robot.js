import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import MyGUI from "../../../utils/js/my-gui.js"
import * as THREE from 'three'

import AnimManager from '../../../utils/js/anim-manager.js'


class ThreeRobot {
  constructor() {
    this.bind()
  }

  initJointsStateSetter(setJointsState) {
    this.setJointsState = setJointsState
  }

  init(scene) {
    this.scene = scene
    this.modelLoader = new GLTFLoader()
    this.joints = []
    // const robotGUIFolder = MyGUI.addFolder("Robot")
    this.modelLoader.load("./assets/3d/pretotype-arm.glb", (glb) => {
      this.robotRoot = glb.scene.children[0]
      this.scene.add(this.robotRoot)

      this.robotRoot.traverse(child => {
        const mat = new THREE.MeshNormalMaterial()
        if (child.isMesh) {
          child.material = mat

          if (child.name === "j0") {
            this.joints[0] = child
            MyGUI.add(child.rotation, "y", 0, Math.PI * 2).name("Joint 0 rotation").onChange(() => { this.onGUIChange(child) })
          }
          if (child.name === "j1") {
            MyGUI.add(child.rotation, "z", -Math.PI, Math.PI).name("Joint 1 rotation").onChange(() => { this.onGUIChange(child) })
            this.joints[1] = child

          }
          if (child.name === "j2") {
            MyGUI.add(child.rotation, "z", 0, Math.PI * 2).name("Joint 2 rotation").onChange(() => { this.onGUIChange(child) })
            this.joints[2] = child

          }
        }
      })
    })
  }

  onGUIChange(child) {
    console.log(this.jointsState)

    const jointsStateUpdate = this.jointsState.map(obj => {
      if (obj.joint === child.name) {
        console.log(obj.axe)
        return { ...obj, value: child.rotation[obj.axe] }
      } else {
        return obj
      }
    })
    console.log(jointsStateUpdate)
    this.setJointsState(jointsStateUpdate)
  }

  updateJoints(jointsState) {
    this.jointsState = jointsState
    jointsState.forEach(data => {
      this.scene.traverse(child => {
        if (child.name == data.joint) {
          child.rotation[data.axe] = data.value
        }
      })
    })
  }

  bind() {
  }
}

const _instance = new ThreeRobot()
export default _instance