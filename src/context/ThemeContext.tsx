import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a context with default value
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Define the type for the ThemeProvider props
interface ThemeProviderProps {
  children: ReactNode; // Define the children prop to accept any React elements
}

// Create a provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle theme function
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}  {/* Render the children passed to the provider */}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);