import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import User from '../components/User';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
interface UserType {
  id: string;
  name: string;
  phone: string;
  imageUrl: string; 
}

const users: UserType[] = [
  { id: '1', name: 'John Doe', phone: '1234567890', imageUrl: 'user1' },
  { id: '2', name: 'Jane Smith', phone: '4565486611', imageUrl: 'user2' },
  { id: '3', name: 'Mohamed Omari', phone: '0987654321', imageUrl: 'user1' },
  { id: '4', name: 'Adam', phone: '7787878787', imageUrl: '' },
  { id: '5', name: 'George', phone: '565656565', imageUrl: 'user2' },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleUserPress = (user: UserType) => {
    navigation.navigate('Chat', { 
      user: { 
        id: user.id,
        name: user.name,
        phone: user.phone,
        imageUrl: user.imageUrl || '',
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => handleUserPress(item)}
          >
            {/* Use the User component here */}
            <User 
              id={item.id} 
              name={item.name} 
              phone={item.phone} 
              imageUrl={item.imageUrl} // Pass imageUrl here
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#232931',
    padding: 5,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  userItem: {
    padding: 15,
    height: 60,
    marginVertical: 3,
    backgroundColor: '#393e46',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
