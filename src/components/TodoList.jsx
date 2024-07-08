import react, { useState } from "react";

function TodoList() {
  // create an array for tasks
  const [tasks, setTasks] = useState([]);

  // create an state for each task
  const [newTask, setNewTask] = useState("");

  // for the textbox when we type sth into
  function handleInputChange(event) {
    // access the event access its target access its value
    // we need this functiont so the text in the box can change
    setNewTask(event.target.value);
  }

  function addTask() {
    {
      if (newTask.trim() !== "") {
        setTasks((prevState) => [...prevState, newTask]);
        // setTasks([...tasks, newTask]);
        setNewTask("");
      }
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((Element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
