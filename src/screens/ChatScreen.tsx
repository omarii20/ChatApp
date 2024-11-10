import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { images } from '../utils/images';

type ChatScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;
type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

interface ChatScreenProps {
  route: ChatScreenRouteProp;
  navigation: ChatScreenNavigationProp;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ route, navigation }) => {
  const { user } = route.params;
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([]);

  useEffect(() => {
    // Set header options to show the user’s name and image with a back button, comment the user image and stay with user name .
    const userImage = user.imageUrl && images[user.imageUrl] ? images[user.imageUrl] : images.default;

    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.userHeader}>
          {/* <Image source={userImage} style={styles.userImage} /> */}
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      ),
    });
  }, [navigation, user]);

  const handleSendMessage = (text: string) => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const newMessage = {
      sender: 'Me',
      text,
      time: `${hours}:${minutes}`,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <View style={styles.container}>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // userImage: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: '#eeeeee',
  //   marginRight: 10, 
  // },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ChatScreen;
