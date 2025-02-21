import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from '@/components/ThemedView';
import ProfileScreen from "@/components/ProfileScreen";

const profile = () => {
  return (
     <View style={styles.container}>
        
       {/* Main Content */}
      <ThemedView style={styles.content}>
        <ProfileScreen />
      </ThemedView>
     </View>
  );
};

export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
});
