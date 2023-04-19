import { useEffect } from 'react';
import api from '../services/axios';
import { auth } from '../services/firebase';

function Home({ user }: any) {
    useEffect(() => {
        async function getUsers() {
            const result = await api.get('/users');

            console.log('users', result);
        }

        getUsers();
    }, []);

    return <>
        <h1>Hello, <span></span>{user.displayName}</h1>
        <img src={user.photoURL} alt="" />
        <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </>;
}

export default Home;