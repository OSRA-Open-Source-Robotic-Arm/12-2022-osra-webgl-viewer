import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import MyGUI from "../../../utils/js/my-gui.js"
import * as THREE from 'three'

import AnimManager from '../../../utils/js/anim-manager.js'


class ThreeRobot {
  constructor() {
    this.bind()

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
            MyGUI.add(child.rotation, "y", 0, Math.PI * 2).name("Joint 0 rotation")
            this.joints[0] = child
          }
          if (child.name === "j1") {
            MyGUI.add(child.rotation, "z", -Math.PI, Math.PI).name("Joint 1 rotation")
            this.joints[1] = child

          }
          if (child.name === "j2") {
            MyGUI.add(child.rotation, "z", 0, Math.PI * 2).name("Joint 2 rotation")
            this.joints[2] = child

          }
        }
      })
    })

    AnimManager.addonUpdateCallBack(this.onTLUpdate, "three_tl_updater")

  }


  onTLUpdate(animData) {
    console.log(animData)
    this.joints[0].rotation.y = animData.j0
    this.joints[1].rotation.z = animData.j1
    this.joints[2].rotation.z = animData.j2
  }


  update() {

  }

  bind() {
    this.onTLUpdate = this.onTLUpdate.bind(this)
  }
}

const _instance = new ThreeRobot()
export default _instance