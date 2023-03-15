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
      const dataArray = []
      this.animationData.forEach(data => {
        dataArray.push({
          target: data.target,
          axe: data.axe,
          value: data.value
        })
      })
      obj.callback(dataArray)
    })
  }

  updateKeyframes(keyframes, animTime) {
    this.timeline.clear()
    this.animationData = []
    keyframes.forEach((target, i) => {
      const animData = {
        target: target.target,
        axe: target.axe,
        value: target.keyframes[0].value
      }
      this.animationData.push(animData)

      target.keyframes.forEach((kf, j) => {
        if (j === 0)
          return
        this.timeline.to(this.animationData[0], {
          value: kf.value,
          duration: kf.time - target.keyframes[j - 1].time
        }, target.keyframes[j - 1].time)
      });
    })
  }

  bind() {
    this.onTLUpdate = this.onTLUpdate.bind(this)
    this.updateKeyframes = this.updateKeyframes.bind(this)
  }

}

const _instance = new AnimManager()
export default _instance