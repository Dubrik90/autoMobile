import React, { useEffect, useState } from 'react';
import {loadCurrentTheme, saveCurrentTheme, Theme} from "../themeStogage/themeStorage";


interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme должен использоваться внутри ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        loadCurrentTheme().then((savedTheme) => {
            const defaultTheme: Theme = savedTheme || 'light';
            setTheme(defaultTheme);
        });
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        saveCurrentTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
