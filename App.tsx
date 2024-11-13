import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import SettingsScreen from './src/screens/SettingScreen';
import { ThemeProvider } from './src/context/ThemeContext';  // Import ThemeProvider

// Define and export RootStackParamList type
export type RootStackParamList = {
  Home: undefined;
  Chat: { user: { id: string; name: string; phone: string; imageUrl: string } };
  Settings: undefined;
};

// Initialize the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;