import React, { useEffect, useRef, useState } from 'react'
import useStore from '../../../../../store.js'
import "./timeline-progress-bar-track-keyframe.scss"

export default function TimelineProgressBarTrackKeyframe(props) {
  const animTime = useStore(state => state.animTime)
  const childKf = useRef(null)
  const [kfOffset, setKfOffset] = useState(0)

  useEffect(() => {
    if (childKf)
      if (animTime) {
        const parWidth = childKf.current.parentNode.clientWidth
        setKfOffset((props.kf.time / animTime) * parWidth)
      }
  }, [animTime, childKf])

  // function handleKeyframePostion(kf) {
  //   const string = "padding:30px"
  //   if (childKf.current)
  //     console.log(childKf.current.parentNode.clientWidth)
  //   return {}
  // }

  return (
    <div ref={childKf} className='timeline-progress-bar-track-keyframe' style={{ transform: `translateX(${kfOffset}px)` }}></div >
  )
}
