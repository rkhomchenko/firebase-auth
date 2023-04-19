import { applicationDefault, initializeApp } from 'firebase-admin/app';

process.env.GOOGLE_APPLICATION_CREDENTIALS = `${process.cwd()}/keys/firebase.json`;

const app = initializeApp({ credential: applicationDefault() });

export default app;