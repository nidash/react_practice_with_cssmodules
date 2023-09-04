import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUserList((prevlist) => {
            return [...prevlist, {name: uName, age: uAge}];
        })
    }
    return (
        <React.Fragment>
            <AddUsers onAddUser={addUserHandler}/>
            <UsersList users={userList}/>
        </React.Fragment>
    );
}

export default App;
