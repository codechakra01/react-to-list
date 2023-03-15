import { useState } from "react"

export default function ListItem({ item, deleteFunc, position, markDone }) {
    const [doneStatus, setStatus] = useState(false)

    return (
        <tr>
            <td style={{ textAlign: "start" }}>{ doneStatus ? <strike>{item.task}</strike> : item.task}</td>
            <td>{item.status}</td>
            <td><button onClick={() => {
                deleteFunc(position)
            }}>Delete</button></td>

            <td><button onClick={() => {
                markDone(position)
                setStatus(true)
            }}>Mark Done</button></td>
        </tr>
    )
}