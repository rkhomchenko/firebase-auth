import { createContext, useState } from 'react';

export const SessionContext = createContext<any>({});

export default function ({ children }: any) {
    const state = useState(null);

    return <SessionContext.Provider value={state}>
        {...children}
    </SessionContext.Provider >
}