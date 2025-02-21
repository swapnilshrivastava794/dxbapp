import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity onPress={() => console.log('Menu clicked')}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assets/images/dnn-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => console.log('Plus clicked')}>
          <FontAwesome5 name="plus-circle" size={28} color="#3580C3" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Gamepad clicked')}>
          <FontAwesome5 name="gamepad" size={28} color="#3580C3" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search clicked')}>
          <FontAwesome5 name="search" size={28} color="#3580C3" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff', // Full opacity white
    width: '100%',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10, // Keeps it above other content
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    opacity: 1, // Ensure full opacity
  },
  logo: {
    width: 100,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 35, // Used instead of `gap`
  },
});

export default Header;
