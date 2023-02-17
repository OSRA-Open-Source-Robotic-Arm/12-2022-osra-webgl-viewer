import { gsap } from "gsap"
class AnimManager {
  constructor() {
    this.bind()
    this.params = {
      j0: 0,
      j1: 0,
      j2: 0,
    }
    this.timeline = gsap.timeline({
      onUpdate: () => {
        console.log(this.params)
      }
    })

  }

  init() {
  }

  addKeyframe() {

  }

  removeKeyframe() {

  }

  update(keyframes) {
    this.timeline.clear()
    keyframes.forEach(key => {
      if (key.joint == "j0")
        this.timeline.to(this.params, { j0: key.value }, key.time)
      if (key.joint == "j1")
        this.timeline.to(this.params, { j1: key.value }, key.time)
      if (key.joint == "j2")
        this.timeline.to(this.params, { j2: key.value }, key.time)
    })
    this.timeline.play()
  }

  bind() {
    this.update = this.update.bind(this)
  }

}

const _instance = new AnimManager
export default _instance