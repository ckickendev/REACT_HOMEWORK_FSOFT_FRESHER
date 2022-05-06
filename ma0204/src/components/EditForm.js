import React, { useState } from "react";

export const EditForm = (props) => {
  const [name, setName] = useState(props.user.name);
  const [age, setAge] = useState(props.user.age);
  const [address, setAddress] = useState(props.user.address);
  const [phone, setPhone] = useState(props.user.phone);

  const [nameMess, setNameMess] = useState("");
  const [ageMess, setAgeMess] = useState("");
  const [addressMess, setAddressMess] = useState("");
  const [phoneMess, setPhoneMess] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateHandler = (e) => {
    let checked = true;
    e.preventDefault();
    if (name === "") {
      setNameMess("Name required");
      checked = false;
    } else {
      if (name.match(/^[a-zA-Z\s]+$/) == null) {
        setNameMess("Name only have text");
        checked = false;
      } else {
        setNameMess("");
      }
    }
    if (age.toString() === "") {
      setAgeMess("Age required");
      checked = false;
    } else {
      if (age.toString().match(/^[0-9]+$/) == null) {
        setAgeMess("Age only have digit");
        checked = false;
      } else {
        setAgeMess("");
      }
    }
    console.log(address.match(/^[a-zA-Z]+$/));
    if (address === "") {
      setAddressMess("Address required");
      checked = false;
    } else {
      if (address.match(/^[a-zA-Z\s]+$/) == null) {
        setAddressMess("Address only have text");
        checked = false;
      } else {
        setAddressMess("");
      }
    }

    if (phone.toString() === "") {
      setPhoneMess("Phone required");
      checked = false;
    } else {
      if (phone.toString().match(/^[0-9]+$/) == null) {
        setPhoneMess("Phone only have digit");
        checked = false;
      } else {
        setPhoneMess("");
      }
    }
    if (checked) {
      const user = { name, age, address, phone };
    //   console.log("user", user);
      props.editUser(props.index, user);
      props.setPageRight(0);
      setName("");
      setAge("");
      setAddress("");
      setPhone("");
    }
  };
  return (
    <form className="mt-4">
      <div className="form-group">
        <div className="d-flex">
          <label className="col-md-3" htmlFor="Name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="Name"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="d-flex">
          <div className="col-md-3"></div>
          <p className="text-danger">{nameMess}</p>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <label className="col-md-3" htmlFor="Age">
            Age
          </label>
          <input
            className="form-control"
            type="text"
            id="Age"
            value={age}
            onChange={changeAge}
          />
        </div>
        <div className="d-flex">
          <div className="col-md-3"></div>
          <p className="text-danger">{ageMess}</p>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <label className="col-md-3" htmlFor="Address">
            Address
          </label>
          <input
            className="form-control"
            type="text"
            id="Address"
            value={address}
            onChange={changeAddress}
          />
        </div>
        <div className="d-flex">
          <div className="col-md-3"></div>
          <p className="text-danger">{addressMess}</p>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <label className="col-md-3" htmlFor="Phone">
            Phone
          </label>
          <input
            className="form-control"
            type="text"
            id="Phone"
            value={phone}
            onChange={changePhone}
          />
        </div>
        <div className="d-flex">
          <div className="col-md-3"></div>
          <p className="text-danger">{phoneMess}</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-danger col-md-4 m-auto"
          onClick={updateHandler}
        >
          Update
        </button>
      </div>
    </form>
  );
};
