import "./timeline.scss"
import TimelineKfSetter from './timeline-kf-setter/timeline-kf-setter'
import TimelineProgressBar from './timeline-progress-bar/timeline-progress-bar'
import AnimationController from './animation-controller/animation-controller'

function Timeline() {

  return (
    <div className="timeline">
      <TimelineKfSetter />

      <TimelineProgressBar />

      <AnimationController />
    </div>
  )

}

export default Timeline