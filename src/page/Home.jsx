import axios from 'axios'
import React, {useEffect, useState} from "react";
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import {Button} from "react-bootstrap";

function Home() {
    const[isOpen, setIsOpen] = useState(false);
    const[task, setTask]= useState([])
const url="https://65f48267f54db27bc021de27.mockapi.io/task-tracker"

const getTask = async () => {
  const { data } = await axios(url);
  setTask(data);
};

const toggle = () => {
  setIsOpen(!isOpen);
};

useEffect(() => {
  getTask();
}, []);

return (
  <div className="mt-4 d-flex justify-content-center flex-column">
    <Button onClick={() => toggle()}>
      {isOpen ? "Hide Task Bar" : "Show Task Bar"}
    </Button>
    {isOpen && <AddTask getTask={getTask} />}
    <TaskList task={task} getTask={getTask} />
  </div>
);
}

export default Home;
