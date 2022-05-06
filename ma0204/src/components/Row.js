import React, { useState } from "react";
import { BiEditAlt, BiWindowClose } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const Row = (props) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(props.user.name);
  const [address, setAddress] = useState(props.user.address);
  const onCheckEditHandler = () => {
    const user = { name , age: props.user.age, address, phone: props.user.phone }
    props.editUser(props.index, user)
    setEdit(false);
  }
  const onEditFormHandler = () => {
    props.onEditFormHandler(props.user, props.index);
  }
  const onDeleteHandler = () => {
    props.onDeleteHandler(props.index);
  }
  return (
    <tr>
      <td>{props.index + 1}</td>
      {edit ? (
        <>
          <td>
            <input value={name} onChange={(e) => {setName(e.target.value)}} />
          </td>
          <td>
            <input value={address} onChange={(e) => {setAddress(e.target.value)}} />
          </td>
          <td>
            <button className="btn btn-transparent" >
              <AiOutlineCheckCircle
                onClick={onCheckEditHandler}
                color="red"
                size={35}
              />
            </button>
          </td>
        </>
      ) : (
        <>
          <td onClick={() => setEdit(true)}>{props.user.name}</td>
          <td onClick={() => setEdit(true)}>{props.user.address}</td>
          <td>
            <BiEditAlt onClick={onEditFormHandler} color="blue" size={35} />
            <BiWindowClose onClick={onDeleteHandler} color="red" size={35} />
          </td>
        </>
      )}
    </tr>
  );
};
