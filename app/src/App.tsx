import React, { useEffect, useState } from 'react';
import './App.css';
import { auth } from './services/firebase';
import Login from './components/Login';
import Home from './components/Home';
import api from './services/axios';

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      // console.log(user);
      const permissions = await getPermissions();

      console.log('permissions', permissions);


      setUser(user);
    });

    async function getPermissions() {
      return api.get('/auth');
    }
  }, []);

  useEffect(() => {
    async function getDashboard() {
      const result = await api.get('/dashboard');

      console.log('dashboard', result);
    }

    getDashboard();
  }, []);

  return (
    <>
      {user ? <Home user={user}></Home> : <Login />}
    </>
  );
}

export default App;
