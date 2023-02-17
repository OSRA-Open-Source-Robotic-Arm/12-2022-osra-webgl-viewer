import { gsap } from "gsap"
class AnimManager {
  constructor() {
    this.bind()
    this.animationData = {
      j0: 0,
      j1: 0,
      j2: 0,
    }
    this.onUpdateCallBacks = []
    this.timeline = gsap.timeline({
      onUpdate: () => {
        this.onTLUpdate()
      }
    })
  }

  init() {
  }

  addonUpdateCallBack(callback, name) {
    this.onUpdateCallBacks.push({ callback: callback, name: name })
  }

  onTLUpdate() {
    this.onUpdateCallBacks.forEach(obj => {
      obj.callback(this.animationData)
    })
  }

  updateKeyframes(keyframes) {
    this.timeline.clear()
    keyframes.forEach(key => {
      if (key.joint === "j0")
        this.timeline.to(this.animationData, { j0: key.value }, key.time)
      if (key.joint === "j1")
        this.timeline.to(this.animationData, { j1: key.value }, key.time)
      if (key.joint === "j2")
        this.timeline.to(this.animationData, { j2: key.value }, key.time)
    })
  }

  bind() {
    this.onTLUpdate = this.onTLUpdate.bind(this)
    this.updateKeyframes = this.updateKeyframes.bind(this)
  }

}

const _instance = new AnimManager()
export default _instance