import React, { createContext, useContext, useState} from "react";

const DarkModeContext = createContext();

const DrakModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

    };
    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

const userDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(!context){
        throw new Error('useDarkmode must be used within a DarkModeProvider');
    }
    return context
};

export { DrakModeProvider, userDarkMode };
