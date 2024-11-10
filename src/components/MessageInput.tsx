import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from 'react-native';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Initial height for the TextInput

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
    <View style={styles.container}>
        <TextInput
          style={[styles.input, { height: inputHeight }]}
          placeholder="Type a message..."
          placeholderTextColor="#eeeeee"
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
    borderTopWidth: 1,
    borderColor: '#4ecca3',
    backgroundColor: '#393e46',
  },
  input: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#4ecca3',
    borderRadius: 5,
    backgroundColor: '#232931',
    color: '#eeeeee',
    marginRight: 10,
    maxHeight: 120, 
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});

export default MessageInput;
