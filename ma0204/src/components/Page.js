import React, { useState } from "react";
import { CreateForm } from "./CreateForm";
import { EditForm } from "./EditForm";
import { Row } from "./Row";

export const Page = () => {
  const [onRight, setOnRight] = useState(1);
  const [userEdit, setUserEdit] = useState({});
  const [indexEdit, setIndexEdit] = useState();
  const [listUser, setListUser] = useState([
    { name: "tuan", age: 40, address: "address1", phone: "29927222" },
  ]);

  const handleCreate = () => {
    if (onRight === 0) {
      setOnRight(1);
    } else {
      setOnRight(0);
    }
  };
  const addUserHandler = (user) => {
    setListUser((listUser) => [...listUser, user]);
  };

  const editUser = (index, user) => {
    console.log(index, user);
    setListUser((listUser) => {
      listUser.forEach((u, i) => {
        if (i === index) {
          u.address = user.address;
          u.name = user.name;
        }
      });
      return listUser;
    });
    // setOnRight(0);
  };
  const onEditFormHandler = (user, index) => {
    setUserEdit(() => user);
    setIndexEdit(() => index);
    if (onRight === 2) {
      setOnRight(0);
    } else {
      setOnRight(2);
    }
  };
  const onDeleteHandler = (index) => {
    setListUser((listUser) => {
      return listUser.filter((user, i) => i!==index);
    });
  };

  return (
    <div className="d-flex">
      <div className="left col-md-6 text-center">
        <table className="table mt-4 table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((user, index) => {
              return (
                <Row
                  onDeleteHandler={onDeleteHandler}
                  onEditFormHandler={onEditFormHandler}
                  editUser={editUser}
                  key={index}
                  user={user}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn-primary col-md-3 text-center"
          onClick={handleCreate}
        >
          Create User
        </button>
      </div>
      {onRight === 1 ? (
        <div className="right col-md-6">
          <CreateForm addUserHandler={addUserHandler} />
        </div>
      ) : (
        <></>
      )}
      {onRight === 2 ? (
        <div className="right col-md-6">
          <EditForm
            index={indexEdit}
            setPageRight={(num) => {
              setOnRight(num);
            }}
            editUser={editUser}
            user={userEdit}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
