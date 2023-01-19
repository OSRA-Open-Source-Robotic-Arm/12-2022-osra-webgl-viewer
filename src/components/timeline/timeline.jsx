import "./timeline.scss"
import Draggable from 'react-draggable';
import Left_side from '../left_side/left_side'
import Middle_side from '../middle_side/middle_side'
import Right_side from '../right_side/right_side'

function Timeline() {

  return (
    <div className="timeline">
        <Left_side />

        <Middle_side />

        <Right_side />
      </div>
  );
  
}

export default Timeline;