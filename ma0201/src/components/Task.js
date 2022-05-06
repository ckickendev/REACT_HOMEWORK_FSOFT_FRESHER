import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

export const Task = (props) => {
  const [status, setStatus] = useState(props.status);
  const deleteHandler = () => {
      console.log(props.chimuc);
      props.removeTaskHandler(props.chimuc)
  }
  return (
    <>
      {!status ? (
        <div className="col-md-4 mt-2 mb-2 btn btn-info d-flex justify-content-between align-items-center" >
          <span onClick={() => {setStatus(!status)} }>{props.content}</span>
          <AiFillCloseSquare onClick={deleteHandler} size={40} />
        </div>
      ) : (
        <div className="col-md-4 mt-2 mb-2 btn btn-success d-flex justify-content-between align-items-center" >
        <span onClick={() => {setStatus(!status)} }>{props.content} (completed)</span>
        <AiFillCloseSquare onClick={deleteHandler} size={40} />
      </div>
      )}
    </>
  );
};
