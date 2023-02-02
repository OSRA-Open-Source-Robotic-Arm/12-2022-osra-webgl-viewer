export default function Select({ className, values }) {
    return (
        <select className={className}>
            {values.map((value, i) => {
                return <option value={value[0]} key={i}>{value[1]}</option>
            })}
        </select>
    )
}