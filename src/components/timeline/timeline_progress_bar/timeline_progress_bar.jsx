import "./timeline_progress_bar.scss"
import React, { useEffect, useRef } from "react"
import useStore from "../../../store"
import AnimManager from "../../../utils/js/anim-manager.js"
import TimeLineScraperManager from "./timeline_progress_bar-scripts/time-line-scraper-manager.js"

export default function TimelineProgressBar() {
  const animTime = useStore((state) => state.animTime)
  // const dragInstance = useRef(null)
  const scrapeSpace = useRef(null)
  const dragTarget = useRef(null)
  const setCurrentTime = useStore(state => state.setCurrentTime)


  useEffect(() => {
    AnimManager.addonUpdateCallBack(onTlUpdate, "timeline_progress_bar_update")
    TimeLineScraperManager.init(dragTarget.current,
      scrapeSpace.current, setCurrentTime, animTime)

  }, [])


  function onTlUpdate(data) {

    // dragTarget.current.style = `translate(${AnimManager.timeline.time() * 100}px, -10px);`
  }

  useEffect(() => {
  }, [animTime])

  // window.addEventListener("resize", (event) => {//To resize the width of the draggable white line when the screen size changes
  //   dragInstance.current[0].vars.bounds.width = window.innerWidth / (1707 / 630)
  // })

  return (
    <div className="reader">
      <div className="reader_background">
      </div>
      <div className="reader_secondes" ref={scrapeSpace}>
        <div className="reader_secondes_scraper" ref={dragTarget}>
          <img className="reader_secondes_scraper_head" src="/assets/images/scraper-head.svg" draggable="false"></img>
          <div className="reader_secondes_scraper_line"></div>
        </div>
      </div>
      <div className="reader_lecteur">
        {["first-black-line", "b", "c"].map((index) => (
          <div className="reader_lecteur_black-line" key={index} id={index}></div>
        ))}
      </div>
    </div >
  )
}