import React, { useRef, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Message from './Message';

interface MessageProps {
  sender: string;
  text: string;
  time: string;
}

interface MessageListProps {
  messages: MessageProps[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const flatListRef = useRef<FlatList<MessageProps>>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      renderItem={({ item }) => (
        <Message sender={item.sender} text={item.text} time={item.time} />
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 10 }} // Adds padding at the bottom for visibility
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MessageList;