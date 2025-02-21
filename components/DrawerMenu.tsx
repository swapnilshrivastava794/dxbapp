import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerMenu = (props) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.menuItem}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Text style={styles.menuItem}>🔍 Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
          <Text style={styles.menuItem}>🎮 Game</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddContentScreen")}>
          <Text style={styles.menuItem}>➕ Add Content</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default DrawerMenu;
