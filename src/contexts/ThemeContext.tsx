import { createContext, useState } from "react";

type ThemeName = 'light' | 'dark';

interface ThmemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThmemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps ) => {

    const [theme, setTheme] = useState<ThemeName>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}