import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Task } from "./Task";

export const ToDo = () => {
  const [currentTask , setCurrentTask] = useState("");
  const [listTask, setListTask] = useState([]);
  let renderListTask = () => {
    return listTask.map((task, index) => (
      <Task key={index} content={task} status={false} chimuc={index} removeTaskHandler={removeTaskHandler} />
    ));
  };
  const addTaskHandler = async () => {
    if(currentTask === ""){
      return;
    }
    const arr = [currentTask, ...listTask];
    setListTask(arr);
    setCurrentTask("");
  }
  const removeTaskHandler = (index) => {
    // console.log(index);
    const arr = listTask.filter((item, i) => i !== index)
    // console.log(arr);
    setListTask(arr);
  }

  useEffect(() => {
    const renderListTask1 = () => {
      return listTask.map((task, index) => {
        return <Task key={index} content={task} status={false} chimuc={index} removeTaskHandler={removeTaskHandler}/>
      });
    };
    renderListTask = renderListTask1();
  }, [addTaskHandler, removeTaskHandler])
  
  const currentTaskChange = (e) => {
    setCurrentTask(e.target.value);
  }
  
  return (
    <div className="col-md-6  m-auto border border-secondary m d-flex flex-column text-center align-items-center">
      <h1 className="text-center text-danger">To-Do List</h1>
      <p className="text-center">
        Enter text into the input field to add items to your list
      </p>
      <p className="text-center">
        Click the "X" to remove the item from your list
      </p>
      <p className="text-center">Click the item to mark it as complete</p>
      <div className="d-flex align-items-center col-md-6 m-auto">
        <input
          type="text" value={currentTask}
          className="form-control  justify-content-center"
          placeholder="Enter task"
          onChange={currentTaskChange}
        />
        <AiFillPlusCircle onClick={addTaskHandler} size="50px" color="red" />
      </div>
      {renderListTask()}
      {/* <Task content="test1" status={false} />
      <Task content="test2" status={true} /> */}
    </div>
  );
};
