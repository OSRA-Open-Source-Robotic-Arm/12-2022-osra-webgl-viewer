import React from 'react'
import "./timeline-kf-setter-parameter.scss"
import TimelineInput from '../../../ui/timeline-input/timeline-input'
import useStore from '../../../../store.js'


export default function TimelineKfSetterParameter(props) {
  const currentTime = useStore((state) => state.currentTime)
  const addKeyframe = useStore((state) => state.addKeyframe)
  const jointsState = useStore((state) => state.jointsState)

  function handleButtonClick() {
    console.log(jointsState.find(obj => obj.joint == props.jointState.joint))
    addKeyframe({
      target: props.jointState.joint,
      value: jointsState.find(obj => obj.joint == props.jointState.joint).value,
      time: currentTime
    })
  }

  return (
    <div className='timeline-kf-setter-parameter'>
      <div className="timeline-kf-setter-parameter_nom">
        <div className="timeline-kf-setter-parameter_nom_axe">Axe : {props.jointState.axe} of {props.jointState.joint}</div>
        <div className="timeline-kf-setter-parameter_nom_line"></div>
        <button className="timeline-kf-setter-parameter_nom_add-position" onClick={() => { handleButtonClick() }}></button>
        <TimelineInput input_id="axe-x" input_value={props.jointState.value} unit={""} input_marginLeft={"-11%"} />
      </div>
    </div>
  )
}
