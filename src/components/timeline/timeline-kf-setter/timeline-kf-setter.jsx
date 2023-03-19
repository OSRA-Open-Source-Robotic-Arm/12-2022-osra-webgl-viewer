import React, { useEffect, useState } from "react"
import "./timeline-kf-setter.scss"
import TimelineSelect from '../../ui/timeline-select/timeline-select'
import TimelineKfSetterParameter from "./timeline-kf-setter-parameter/timeline-kf-setter-parameter"

import useStore from "../../../store"
export var keyFrames = []

export default function TimelineKfSetter() {

  const animTime = useStore((state) => state.animTime)
  const jointsState = useStore((state) => state.jointsState)
  const armPosition = useStore((state) => state.armPosition)
  const setArmPosition = useStore((state) => state.setArmPosition)

  useEffect(() => {
  }, [jointsState])

  // function handleKeyframeData(data) {
  //   if (data.length == 0)
  //     return


  // }


  return (
    <div className="timeline-kf-setter">
      <div className="timeline-kf-setter_noms">
        {/* <TimelineSelect select_id="axe_selector" select_className={"select timeline-kf-setter_noms_nom"} select_values={position_options} onChangeCallback={handleSelectChange} onSelectChange /> */}
        <TimelineSelect select_className={"select timeline-kf-setter_noms_unités"} select_values={[["cm", "cm"]]} />
      </div>
      <div className="timeline-kf-setter_lignes">
        {jointsState.map(jointState => (
          <TimelineKfSetterParameter key={jointState.joint} jointState={jointState} />
        ))}
        <div className="timeline-kf-setter_lignes_delete-keyFrame">
          <button className="timeline-kf-setter_lignes_delete-keyFrame_button" onClick={() => { }}>
            Delete keyFrame
          </button>
        </div>
      </div>
    </div>
  )
}