import "./timeline.scss"
import TimelineKfSetter from './timeline-kf-setter/timeline-kf-setter'
import TimelineProgressBar from './timeline_progress_bar/timeline_progress_bar'
import AnimationController from './animation_controller/animation_controller'

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