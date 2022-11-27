import './App.css';
import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
    const [users, setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch( "https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      if (!res.ok) {
        throw Error('User is Not Availble');
      }
      else{
        return res.json();
      }
    })
    .then((users)=>{
      setUsers(users);
      setIsLoading(false);
      setError(null);
    })
    .catch((error)=>{
      setError(error.message);
      setIsLoading(false);
    })
  },[]);


  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error.message}</p>}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;

