import React, {useState, createContext} from 'react';

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}> 
                {props.children}
            </DarkModeContext.Provider>
            
        </>
    );
}

export {DarkModeContext, DarkModeProvider};
