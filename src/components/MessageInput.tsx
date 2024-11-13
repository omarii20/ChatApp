import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {

  const { isDarkMode, toggleTheme } = useTheme();  // Use the theme context

  useEffect(() => {
    // No need to call toggleTheme here, just consume it.
  }, [isDarkMode]);

  const [message, setMessage] = useState('');
  const [inputHeight, setInputHeight] = useState(40); 

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
      setInputHeight(40);
    }
  };

  // Adjust the input height dynamically based on content
  const handleContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
    const contentHeight = e.nativeEvent.contentSize.height;
    setInputHeight(contentHeight > 40 ? contentHeight : 40); // Prevent it from becoming too small
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <TextInput
          style={[styles.input, isDarkMode && styles.darlInput]}
          placeholder="Type a message..."
          placeholderTextColor="#4ecca3"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          onContentSizeChange={handleContentSizeChange}
        />
        <View style={styles.btnContainer}>
          <Button title="Send" onPress={handleSend} color="#4ecca3" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end', 
    padding: 8,
    borderTopWidth: 2,
    borderColor: '#4ecca3',
    backgroundColor: '#eeeeee',
  },
  darkContainer:{
    borderColor: '#4ecca3',
    backgroundColor: '#393e46',
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    color: '#4ecca3',
    borderColor:'#4ecca3',
    borderWidth:1,
    marginRight: 10,
    maxHeight: 120, 
  },
  darlInput:{
    borderColor: '#4ecca3',
    backgroundColor: '#232931',
    color: '#eeeeee',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});

export default MessageInput;