import React, { useState } from "react";
import './TaskInput.css';


const TaskInput = (props) => {

    const [enteredTask, setEnteredTask] = useState('');

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    }
    const taskSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddTask(enteredTask);
        setEnteredTask("");
    }

    return (
        <form onSubmit={taskSubmitHandler}>

            <div className="input-todo">
                <label>To-Do List :</label>
                <input type="text"
                    value={enteredTask}
                    onChange={taskChangeHandler}></input>
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}


export default TaskInput; 