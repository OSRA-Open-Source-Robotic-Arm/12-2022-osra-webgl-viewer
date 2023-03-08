import { gsap } from "gsap"
class AnimManager {
  constructor() {
    this.bind()
    this.animationData = []
    this.onUpdateCallBacks = []
    this.timeline = gsap.timeline({
      onUpdate: () => {
        this.onTLUpdate()
      },
    })
    this.timeline.pause()
  }

  addonUpdateCallBack(callback, name) {
    this.onUpdateCallBacks.push({ callback: callback, name: name })
  }

  onTLUpdate() {
    this.onUpdateCallBacks.forEach(obj => {
      obj.callback(this.animationData)
    })
  }

  updateKeyframes(keyframes, animTime) {
    this.timeline.clear()
    keyframes.forEach((key, i) => {
      // if (key.joint === "j0")
      //   this.timeline.to(this.animationData, { j0: key.value }, key.dTime)
      // if (key.joint === "j1")
      //   this.timeline.to(this.animationData, { j1: key.value }, key.dTime)
      // if (key.joint === "j2")
      //   this.timeline.to(this.animationData, { j2: key.value }, key.dTime)
      const animData = {
        target: key.target,
        value: key.keyframes[0].value
      }
      this.animationData.push(animData)
      const kfs = []
      key.keyframes.forEach(kf => {
        const time = `${kf.time / animTime}%`
        kfs.push({
          time: { value: kf.value }
        })
      })
      gsap.to(this.animationData[i], {
        keyframes: kfs
      })

    })
  }

  bind() {
    this.onTLUpdate = this.onTLUpdate.bind(this)
    this.updateKeyframes = this.updateKeyframes.bind(this)
  }

}

const _instance = new AnimManager()
export default _instance