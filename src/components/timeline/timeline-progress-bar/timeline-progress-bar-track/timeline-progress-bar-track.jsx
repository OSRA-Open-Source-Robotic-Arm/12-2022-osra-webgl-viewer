import React from 'react'
import './timeline-progress-bar-track.scss'
import TimelineProgressBarTrackKeyframe from './timeline-progress-bar-track-keyframe/timeline-progress-bar-track-keyframe'

export default function TimelineProgressBarTrack(props) {
  return (
    <div className='timeline-progress-bar-track'>

      <div className='timeline-progress-bar-track_line'>
        {props.keyframe.keyframes.map((kf, i) => (
          <TimelineProgressBarTrackKeyframe kf={kf} key={i} />
        ))}
      </div>
    </div>
  )
}
