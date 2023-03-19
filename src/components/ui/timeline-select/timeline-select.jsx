import "./timeline-select.scss"
import React from "react"

export default function TimelineSelect({ select_id, select_className, select_values, onChangeCallback }) {

  function handleChange(event) {
    event.preventDefault()
    if (onChangeCallback) onChangeCallback(event.target.value)
  }
  return (
    <select id={select_id} className={select_className} onChange={handleChange}>
      {select_values.map((value, i) => {
        return <option value={value[0]} key={i}>{value[1]}</option>
      })}
    </select>
  )
}