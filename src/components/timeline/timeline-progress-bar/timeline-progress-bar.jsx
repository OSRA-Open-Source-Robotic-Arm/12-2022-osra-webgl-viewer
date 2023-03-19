import "./timeline-progress-bar.scss"
import React, { useEffect, useRef } from "react"
import useStore from "../../../store"
import AnimManager from "../../../utils/js/anim-manager.js"
import TimeLineScraperManager from "./timeline-progress-bar-scripts/time-line-scraper-manager.js"
import TimelineProgressBarTrack from "./timeline-progress-bar-track/timeline-progress-bar-track"

export default function TimelineProgressBar() {
  const animTime = useStore((state) => state.animTime)
  // const dragInstance = useRef(null)
  const scrapeSpace = useRef(null)
  const dragTarget = useRef(null)
  const setCurrentTime = useStore(state => state.setCurrentTime)
  const currentTime = useStore(state => state.currentTime)
  const keyframes = useStore(state => state.keyframes)


  useEffect(() => {
    TimeLineScraperManager.init(dragTarget.current,
      scrapeSpace.current, setCurrentTime, animTime)
  }, [])

  useEffect(() => {
    TimeLineScraperManager.setProgress(currentTime)
  }, [currentTime])


  function handleKeyframes() {
    return keyframes.map((keyframe) => (
      <TimelineProgressBarTrack key={keyframe.target} keyframe={keyframe} />
    ))
  }


  return (
    <div className="timeline-progress-bar">
      <div className="timeline-progress-bar_background">
      </div>
      <div className="timeline-progress-bar_scrape-space" ref={scrapeSpace}>
        <div className="timeline-progress-bar_scrape-space_scraper" ref={dragTarget}>
          <img className="timeline-progress-bar_scrape-space_scraper_head" src="/assets/images/scraper-head.svg" draggable="false"></img>
          <div className="timeline-progress-bar_scrape-space_scraper_line"></div>
        </div>
      </div>
      <div className="timeline-progress-bar_lecteur">
        {handleKeyframes()}
      </div>
    </div >
  )
}