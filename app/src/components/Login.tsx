import React from "react";
import { signInWithGoogle } from "../services/firebase";

function Login() {
    return <>
        <button onClick={signInWithGoogle}>Login via Google</button>
    </>;
}

export default Login;