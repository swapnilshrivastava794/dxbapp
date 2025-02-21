import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation(); // ✅ Access navigation

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
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
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
    backgroundColor: '#ffffff',
    width: '100%',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    opacity: 1,
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
    marginLeft: 35,
  },
});

export default Header;
