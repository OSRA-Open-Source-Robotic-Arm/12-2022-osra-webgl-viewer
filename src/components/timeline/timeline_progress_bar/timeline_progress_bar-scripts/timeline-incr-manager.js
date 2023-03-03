class TimelineIncrManager {
  constructor() {
    this.bind()
  }

  init() {
  }

  five_multiple(number) {
    while (number % 5 !== 0) {
      number += 1;
    }
    return number;
  }

  update(newAnimTime) {
    return [...Array(this.five_multiple(Math.ceil(newAnimTime) + 5) / 5).keys()]
  }

  bind() {
    this.update = this.update.bind(this)
  }

}

const _instance = new TimelineIncrManager
export default _instance