import "./timeline.scss"
import Draggable from 'react-draggable';
import Positions from './positions/positions'
import TimelineProgressBar from './timeline_progress_bar/timeline_progress_bar'
import AnimationController from './animation_controller/animation_controller'

function Timeline() {

  return (
    <div className="timeline">
        <Positions />

        <TimelineProgressBar />

        <AnimationController />
      </div>
  );
  
}

export default Timeline;