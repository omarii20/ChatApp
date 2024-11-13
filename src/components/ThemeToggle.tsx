import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface SettingProps {
  theme: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<SettingProps> = ({ theme, toggleTheme }) => {
  return (
    <View style={[styles.container, theme && styles.darkContainer]}>
      <Text style={[styles.text, theme && styles.darkText]}>
        Dark Mode
      </Text>
      <Switch
        value={theme}
        onValueChange={toggleTheme}
        trackColor={{ false: '#393e46', true: '#eeeeee' }}
        thumbColor={theme ? '#4ecca3' : '#4ecca3'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:70,
    margin:8,
    backgroundColor:'white',
    shadowColor: '#4ecca3',
    // iOS-specific shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android-specific shadow property
    elevation: 4,
  },
  darkContainer: {
    backgroundColor:'#393e46',
    shadowColor: '#eeeeee',
  },
  text: {
    fontSize: 26,
    color: '#393e46',
  },
  darkText: {
    color: '#eeeeee',
  },
});

export default ThemeToggle;
