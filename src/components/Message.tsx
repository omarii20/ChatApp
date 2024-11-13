import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

interface MessageProps {
  sender: string;
  text: string;
  time: string;
}

const Message: React.FC<MessageProps> = ({ sender, text, time }) => {

  const { isDarkMode, toggleTheme } = useTheme();  // Use the theme context

  useEffect(() => {
    // No need to call toggleTheme here, just consume it.
  }, [isDarkMode]);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.sender, isDarkMode && styles.darkSender]}>{sender}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={[styles.time, isDarkMode && styles.darkTime]}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    backgroundColor: '#4ecca3', 
    padding: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4ecca3', 
    alignSelf: 'flex-start', 
    maxWidth: '80%',
  },
  darkContainer:{
    backgroundColor: '#393e46', 
    borderColor: '#4ecca3', 
  },
  sender: {
    color: '#232931',
    opacity: 0.6,
    fontSize: 12,
  },
  darkSender:{
    color: '#eeeeee'
  },
  text: {
    marginVertical: 5,
    color: '#eeeeee', 
    fontSize: 18,
  },
  time: {
    fontSize: 12,
    color: '#232931', 
    opacity: 0.6,
    textAlign: 'right',
  },
  darkTime:{
    color: '#4ecca3', 
    opacity: 1
  }
});

export default Message;
