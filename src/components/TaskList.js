import React from "react"
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul class="tasklist">

      {props.items.map(tasklist => (

        <li
          key={tasklist.id}>
          <p className="tasks">{tasklist.task}</p>
          <button onClick={() => props.deleteHandler(tasklist.id)}>Delete</button>
        </li>

      ))}

    </ul>

  )
}
export default TaskList;