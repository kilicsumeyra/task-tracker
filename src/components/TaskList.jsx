import React from "react";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

function TaskList({ task, getTask }) {
  console.log(task);

  const deleteTask = async (id) => {
    const url= "https://65f48267f54db27bc021de27.mockapi.io/task-tracker";
    try{
        await axios.delete(`${url}/${id}`);
    }catch(error){

    }
    getTask();
  }
  return (
    <div>
      {task.map((item) => {
        const { id, name, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between rounded-2 p-2 bg-secondary"
          >
            <div>
              <h4>{task}</h4>
              <p>{name}</p>
              <p>{date}</p>
            </div>
            <div className="align-items-center d-flex">
              <MdDeleteForever
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  fontSize: "3rem",
                  boxShadow: "2px 2px 2px",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;