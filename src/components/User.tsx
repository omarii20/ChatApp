import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../utils/images';
import { useTheme } from '../context/ThemeContext'; 

interface UserProps {
  id: string;
  name: string;
  phone: string;
  imageUrl: string; 
}

const User: React.FC<UserProps> = ({ id, name, phone, imageUrl }) => {

  const { isDarkMode, toggleTheme } = useTheme();  // Use the theme context

  useEffect(() => {
    // No need to call toggleTheme here, just consume it.
  }, [isDarkMode]);

  const userImage = imageUrl && images[imageUrl] ? images[imageUrl] : images.default;

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={[styles.name, isDarkMode && styles.darkText]}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>

      {/* Dynamically load image based on imageUrl */}
      <Image source={userImage} style={styles.userImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: '#393e46',
  },
  phone: {
    fontSize: 16,
    color: '#4ecca3',
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  darkText: {
    color: '#eeeeee',
  }
});

export default User;
