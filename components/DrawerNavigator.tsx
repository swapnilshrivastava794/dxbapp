import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";  // Your main screen
import ProfileScreen from "@/screens/ProfileScreen"; // Profile Page
import SettingsScreen from "@/screens/SettingsScreen"; // Settings Page
import CustomDrawerContent from "@/components/CustomDrawerContent"; // Custom Drawer UI

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Custom Drawer UI
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerShown: false, // Hide default header
        }}
      >
        {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
