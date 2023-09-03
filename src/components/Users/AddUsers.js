import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
        return;
    }
    if (+age < 1) {
        return;
    }
    props.onAddUser(username, age);
    setAge("");
    setUsername("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
