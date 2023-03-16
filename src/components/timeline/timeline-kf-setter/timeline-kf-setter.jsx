import "./timeline-kf-setter.scss"
import TimelineSelect from '../../ui/timeline_select/timeline_select'
import TimelineInput from '../../ui/timeline_input/timeline_input'
import React, { useEffect, useState } from "react"
import useStore from "../../../store"
import { timeline_draggable_first_position } from "../animation_controller/animation_controller"

export var keyFrames = []

export default function TimelineKfSetter() {

  const animTime = useStore((state) => state.animTime)
  const armPosition = useStore((state) => state.armPosition)
  const setArmPosition = useStore((state) => state.setArmPosition)


  return (
    <div className="timeline-kf-setter">
      <div className="timeline-kf-setter_noms">
        {/* <TimelineSelect select_id="axe_selector" select_className={"select timeline-kf-setter_noms_nom"} select_values={position_options} onChangeCallback={handleSelectChange} onSelectChange /> */}
        <TimelineSelect select_className={"select timeline-kf-setter_noms_unités"} select_values={[["cm", "cm"]]} />
      </div>
      <div className="timeline-kf-setter_lignes">
        <div className="timeline-kf-setter_lignes_nom X">
          <div className="timeline-kf-setter_lignes_nom_axe">X Position</div>
          <div className="timeline-kf-setter_lignes_nom_line"></div>
          <button className="timeline-kf-setter_lignes_nom_add-position" onClick={() => { }}></button>
          <TimelineInput input_id="axe-x" input_value={"10.33"} unit={"cm"} input_marginLeft={"-11%"} />
        </div>
        <div className="timeline-kf-setter_lignes_nom Y">
          <div className="timeline-kf-setter_lignes_nom_axe">Y Position</div>
          <div className="timeline-kf-setter_lignes_nom_line"></div>
          <button className="timeline-kf-setter_lignes_nom_add-position" onClick={() => { }}></button>
          <TimelineInput input_id="axe-y" input_value={"30.01"} unit={"cm"} input_marginLeft={"-11%"} />
        </div>
        <div className="timeline-kf-setter_lignes_nom Z">
          <div className="timeline-kf-setter_lignes_nom_axe">Z Position</div>
          <div className="timeline-kf-setter_lignes_nom_line"></div>
          <button className="timeline-kf-setter_lignes_nom_add-position" onClick={() => { }}></button>
          <TimelineInput input_id="axe-z" input_value={"01.06"} unit={"cm"} input_marginLeft={"-11%"} />
        </div>
        <div className="timeline-kf-setter_lignes_delete-keyFrame">
          <button className="timeline-kf-setter_lignes_delete-keyFrame_button" onClick={() => { }}>
            Delete keyFrame
          </button>
        </div>
      </div>
    </div>
  )
}