import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window"); // Get full screen width

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkBackground]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://markaziasolutions.com/mi-hrms/assets/front_end/images/hero_1.jpg" }}
          style={styles.profileBackground}
        />
        <View style={styles.profileDetails}>
          <Image
            source={{ uri: "https://markaziasolutions.com/mi-hrms/uploads/profile_pic/1727779800harinandbhatt.jpg" }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.profileName}>Harshad Mehta</Text>
          <Text style={styles.joinDate}>Joined on 20 May 2023</Text>
        </View>
      </View>

      {/* Options List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Notifications</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={() => setDarkMode(!darkMode)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={darkMode ? "#fff" : "#f4f3f4"}
            />
          </View>

          {[
            "My Feeds/News",
            "Become a Creator",
            "Add the ADS",
            "Contact us",
            "Invite Friends",
            "Privacy & Security",
            "See Live Streamings",
            "Help Centre",
            "Terms and Conditions",
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Language</Text>
            <Icon name="chevron-down" size={20} color="#000" />
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: width - 20, // Ensuring the full width with 10px margin
    marginHorizontal: 10,
  },
  profileBackground: {
    width: "100%", // Full width
    height: 240,
    borderRadius: 10, // Rounded corners
  },
  profileDetails: {
    position: "absolute",
    alignItems: "center",
    top: 80,
    width: "100%", // Full width
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    zIndex: 99,
  },
  editIcon: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "#3580C3",
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  joinDate: {
    fontSize: 14,
    color: "#fff",
  },
  scrollContainer: {
    paddingBottom: 60, // Prevents cut-off content
  },
  menuContainer: {
    width: width - 20, // Ensures full width with margin
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 5,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Full width
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 16,
    color: "#000",
  },
  logoutButton: {
    width: "100%", // Full width
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default ProfileScreen;
