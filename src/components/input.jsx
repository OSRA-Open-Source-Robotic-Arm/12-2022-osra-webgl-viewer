import React from "react";

export default function Select ({value, unit, marginLeft}) {
    return  (
        <React.Fragment>
            <input value={value} type="number"></input>
            <span style={{ marginLeft: marginLeft, paddingRight: "5%" }}>{ unit }</span>
        </React.Fragment>
    )
}