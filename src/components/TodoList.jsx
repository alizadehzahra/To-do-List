import react, { useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";

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
    <>
      <Container className="to-do-list" fluid>
        <div md={3}>
          <Row>
            <Col className="todo">
              <h1>T O D O</h1>
            </Col>
            <Col>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                />
              </svg>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter a task ..."
                  type="text"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={newTask}
                  onChange={handleInputChange}
                />
                <Button variant="primary" id="button-addon2" onClick={addTask}>
                  Add
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <ol>
                {tasks.map((task, index) => (
                  <li key={index}>
                    <span className="text">{task}</span>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="move-button"
                      onClick={() => moveTaskUp(index)}
                    >
                      ⬆
                    </button>
                    <button
                      className="move-button"
                      onClick={() => moveTaskDown(index)}
                    >
                      ⬇
                    </button>
                  </li>
                ))}
              </ol>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default TodoList;
