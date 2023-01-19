export default function Select ({className, values}) {
    return (
        <select className={className}>
            {values.map(value => {
                return <option value={value[0]}>{value[1]}</option>
            })}
        </select>
    )
}