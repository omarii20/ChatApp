import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import User from '../components/User';
import { useTheme } from '../context/ThemeContext'; 

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

  const { isDarkMode, toggleTheme } = useTheme();  // Use the theme context

  useEffect(() => {
    // No need to call toggleTheme here, just consume it.
  }, [isDarkMode]);

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

  const handleSettingsPress = () => {
    navigation.navigate('Settings'); // Navigate to Setting page
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Button to navigate to Settings */}
      <View style={[styles.buttonContainer, isDarkMode && styles.darkButtonContainer]}>
        <Button 
          title="Settings"
          onPress={handleSettingsPress}
          color="#4ecca3" // Custom color for the button
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.userItem, isDarkMode && styles.darkItem]}
            onPress={() => handleUserPress(item)}
          >
            {/* Use the User component here */}
            <User 
              id={item.id} 
              name={item.name} 
              phone={item.phone} 
              imageUrl={item.imageUrl} 
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
    backgroundColor: '#eeeeee',
    padding: 5,
  },
  darkContainer:{
    backgroundColor: '#232931'
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  userItem: {
    padding: 25,
    height: 60,
    marginVertical: 3,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#393e46',
    // iOS-specific shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android-specific shadow property
    elevation: 4,
  },
  darkItem:{
    shadowColor: '#4ecca3',
    backgroundColor: '#393e46',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 6,
    padding:5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#eeeeee'
  },
  darkButtonContainer:{
    backgroundColor: '#232931'
  }
});

export default HomeScreen;
