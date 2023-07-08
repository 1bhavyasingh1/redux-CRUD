import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addUser } from './components/work';
import { useState } from 'react';
import { deleteUser, updateUsername } from './components/work';


function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");


  return (
    <div className="App">
      <h1>CRUD using Redux</h1>


      <div className='form'>
        <input type='text' placeholder='Enter Task' onChange={(event) => { setName(event.target.value) }} />
        <input type='text' placeholder='Enter Email' onChange={(event) => { setUsername(event.target.value) }} />
        <button onClick={() => { dispatch(addUser({ id: users[users.length - 1].id + 1, name, username })) }}>Add</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div className='post'>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <p>{user.id}</p>
              <input type='text' placeholder='New Username' onChange={(event) => {
                setNewUsername(event.target.value);
              }} />
              <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}>Update User</button>
              <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;