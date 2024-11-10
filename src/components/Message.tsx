import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageProps {
  sender: string;
  text: string;
  time: string;
}

const Message: React.FC<MessageProps> = ({ sender, text, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    backgroundColor: '#393e46', 
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4ecca3', 
    alignSelf: 'flex-start', // Makes the container width wrap its children
    maxWidth: '80%',
  },
  sender: {
    color: '#eeeeee',
    opacity: 0.4,
    fontSize: 12,
  },
  text: {
    marginVertical: 5,
    color: '#eeeeee', 
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#4ecca3', 
    textAlign: 'right',
  },
});

export default Message;
