import React, { useState } from "react";

export const ToDo = () => {
  const [messName, setMessName] = useState("");
  const [messEmail, setMessEmail] = useState("");
  const [messPass, setMessPass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);

  };

  const createHandler = (e) => {
    e.preventDefault();
    var pattern = /[a-zA-Z]{4,}/;
    if (pattern.test(name)) {
      setMessName("");
    }else{
      setMessName("At least 4 character is required")
    }

    var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      setMessEmail("");
    }else{
      setMessEmail("Email address is invalid")
    }

    var pattern = /.{6,}/
    if (pattern.test(pass)) {
      setMessPass("");
    }else{
      setMessPass("At least 6 character is required")
    }
  }
  return (
    <div className="col-md-9 m-auto ">
      <form>
        <div className="form-group mt-4">
          <label for="name">Name</label>
          <input
            onChange={handleName}
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Enter name"
          ></input>
          <p className="text-danger">{messName}</p>
        </div>
        <div className="form-group mt-4">
          <label for="email">Email</label>
          <input
            onChange={handleEmail}
            type="email"
            value={email}
            className="form-control"
            id="email"
            placeholder="Enter email"
          ></input>
          <p className="text-danger">{messEmail}</p>
        </div>
        <div className="form-group mt-4">
          <label for="pass">Password</label>
          <input
            onChange={handlePass}
            type="password"
            value={pass}
            className="form-control"
            id="pass"
            placeholder="Enter Password"
          ></input>
          <p className="text-danger">{messPass}</p>
        </div>
        <button className="btn btn-danger col-md-12" onClick={createHandler}>Create User</button>
      </form>
    </div>
  );
};
