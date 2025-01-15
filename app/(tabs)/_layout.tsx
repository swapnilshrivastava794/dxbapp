import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          Platform.select({
            ios: styles.iosTabBar,
            android: styles.androidTabBar,
          }),
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Icon
                name="home-outline"
                size={30}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              {/* Home */}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: "Video",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Icon
                name="play-circle-outline"
                size={30}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              {/* Video */}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Icon
                name="bookmark-outline"
                size={30}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              {/* Saved */}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Icon
                name="person-outline"
                size={30}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              {/* Profile */}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    borderRadius: 40,
    marginHorizontal: 20, 
    marginBottom: 19, 
    height: 75, 
    backgroundColor: "#0B539D", // Blue background
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5, 
  },
  iosTabBar: {
    backgroundColor: "#0B539D",
  },
  androidTabBar: {
    backgroundColor: "#0B539D",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    top:15,
    alignItems: "center",
    borderRadius: 25,
  },
  activeIconContainer: {
    backgroundColor: "#fff", // White circular background for active tab
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Make the active circle absolute
    top: 5, // Move it slightly upward to center it properly
    zIndex: 1, // Ensure it sits above other elements
  },
  tabLabel: {
    fontSize: 12,
    color: "#fff", // White color for inactive labels
    top:10,
    textAlign: "center",
    marginTop: -5, // Adjust label position closer to the icon
  },
  activeTabLabel: {
    color: "#000", // Black color for active labels
  },
});
