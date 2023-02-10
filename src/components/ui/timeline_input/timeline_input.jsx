import "./timeline_input.scss"
import React from "react";

export default function TimelineInput({ input_value, unit, input_marginLeft, onChangeCallback }) {
    const [stateValue, setStateValue] = React.useState(input_value);

    function handleChange(event) {
        event.preventDefault();
        setStateValue(event.target.value);
        if (onChangeCallback) onChangeCallback(event.target.value);
    }
    return (
        <React.Fragment>
            <input className="timeline_input_input" value={stateValue} onChange={handleChange} type="number"></input>
            <span className="timeline_input_span" style={{ marginLeft: input_marginLeft, paddingRight: "5%" }}>{unit}</span>
        </React.Fragment>
    )
}