import React from 'react';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';

const AddUsers = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log("SUMIT");
    }
return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
    </form>
    </Card>
)
}

export default AddUsers;
