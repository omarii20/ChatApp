import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';  // Import the custom hook

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();  // Use the theme context

  useEffect(() => {
    // No need to call toggleTheme here, just consume it.
  }, [isDarkMode]);

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <ThemeToggle theme={isDarkMode} toggleTheme={toggleTheme} />  {/* Pass theme and toggleTheme */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#eeeeee',
  },
  darkMode: {
    backgroundColor: '#232931',
  },
});

export default SettingsScreen;