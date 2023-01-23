import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import './App.css';

const toDo = [
  {
    id: "k1",
    task: "Do all the exercies"
  },
  {
    id: "k2",
    task: "Complete the Assignment"
  },
  {
    id: "k3",
    task: "Complete the course"
  }
]


function App() {
  const [tasks, setTasks] = useState(toDo);

  const addTaskHandler = (enteredtasks) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ task: enteredtasks, id: Math.random().toString() })
      return updatedTasks;
    })
  }
  const deleteTaskHandler = (id) => {
    const updatedTasks = tasks.filter(tasklist => tasklist.id !== id)
    setTasks(updatedTasks);
  }

  return (

    <div className="App">

      <TaskInput onAddTask={addTaskHandler}></TaskInput>
      <TaskList items={tasks} deleteHandler={deleteTaskHandler}></TaskList>

    </div>
  );
}

export default App;
