import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {

    const [ lang, setLang ] = useState('en')

    return (
        <AppContext.Provider value={{ lang, setLang }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}