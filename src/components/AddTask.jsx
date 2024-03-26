import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddTask({ getTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
    setDate("");
    setTask("");
  };
  const addNewTask = async (newTask) => {
    const url = "https://65f48267f54db27bc021de27.mockapi.io/task-tracker";
    try {
      await axios.post(url, newTask);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask;
