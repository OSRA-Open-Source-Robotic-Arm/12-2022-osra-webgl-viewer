import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import ThreeRobot from './three-robot.js'
import AnimManager from './anim-manager.js'

import RAF from '../../../utils/js/raf.js'

class MainThreeScene {
  constructor() {
    this.bind()
  }

  init(container) {
    //RENDERER SETUP
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.debug.checkShaderErrors = true
    container.appendChild(this.renderer.domElement)

    //MAIN SCENE INSTANCE
    this.scene = new THREE.Scene()

    //CAMERA AND ORBIT CONTROLLER
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.set(2, 2, 10)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enabled = true
    this.controls.maxDistance = 1500
    this.controls.minDistance = 0

    ThreeRobot.init(this.scene)
    const gridHelper = new THREE.GridHelper(10, 10);
    this.scene.add(gridHelper);

    // this.scene.add(new THREE.Mesh(new THREE.BoxGeometry, new THREE.MeshNormalMaterial))

    //RENDER LOOP AND WINDOW SIZE UPDATER SETUP
    window.addEventListener("resize", this.resizeCanvas)
    RAF.subscribe('threeSceneUpdate', this.update)
  }

  update() {
    this.renderer.render(this.scene, this.camera)

  }

  resizeCanvas() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
  }

  bind() {
    this.resizeCanvas = this.resizeCanvas.bind(this)
    this.update = this.update.bind(this)
    this.init = this.init.bind(this)
  }
}

const _instance = new MainThreeScene()
export default _instance