import "./timeline_select.scss"

export default function TimelineSelect({ select_className, select_values }) {
    return (
        <select className={select_className}>
            {select_values.map((value, i) => {
                return <option value={value[0]} key={i}>{value[1]}</option>
            })}
        </select>
    )
}