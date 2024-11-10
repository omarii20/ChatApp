import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../utils/images';

interface UserProps {
  id: string;
  name: string;
  phone: string;
  imageUrl: string; 
}

const User: React.FC<UserProps> = ({ id, name, phone, imageUrl }) => {
  const userImage = imageUrl && images[imageUrl] ? images[imageUrl] : images.default;

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
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
    fontSize: 18,
    color: '#eeeeee',
  },
  phone: {
    fontSize: 14,
    color: '#4ecca3',
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});

export default User;
