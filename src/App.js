import React from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

const users = [
  {name: 'Tito',  age: '15'},
  {name: 'Titi',  age: '25'},
];
  
function App() {
  return (
    <div>
      <AddUsers />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
