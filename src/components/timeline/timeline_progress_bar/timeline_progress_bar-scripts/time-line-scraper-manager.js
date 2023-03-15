class TimeLineScraperManager {
  constructor() {
    this.mouseXStart = 0
    this.offset = 0
    this.lastOffset = 0
    this.downFlag = false
  }

  init = (scraper, scrapeSpace, setCurrentTime, animTime) => {
    this.scraper = scraper
    this.scrapeSpace = scrapeSpace
    this.setCurrentTime = setCurrentTime
    this.animTime = animTime

    this.scraper.addEventListener("mousedown", this.onMouseDown)
    window.addEventListener("mouseup", this.onMouseUp)
    window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseIn = () => {
  }

  onMouseOut = () => {

  }

  onMouseDown = (e) => {
    this.downFlag = true
    this.mouseXStart = e.clientX
  }

  onMouseUp = (e) => {
    if (!this.downFlag)
      return
    this.downFlag = false
    this.lastOffset = this.offset
  }

  onMouseMove = (e) => {
    if (!this.downFlag)
      return
    this.offset = e.clientX - this.mouseXStart + this.lastOffset
    this.offset = Math.min(Math.max(this.offset, 0), this.scrapeSpace.clientWidth)
    const animfac = this.offset / this.scrapeSpace.clientWidth
    const currentTime = animfac * this.animTime
    this.setCurrentTime(currentTime)
    this.moveTo(this.offset)
    // this.scraper
  }

  setProgress(currentTime) {
    if (this.downFlag)
      return
    this.lastOffset = (currentTime / this.animTime) * this.scrapeSpace.clientWidth
    this.moveTo(this.lastOffset)
  }

  moveTo(xpos) {
    this.scraper.style = `transform:translate3d(${xpos}px,0 ,0);`
  }
}

const _instance = new TimeLineScraperManager()
export default _instance