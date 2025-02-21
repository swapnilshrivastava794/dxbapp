import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignupPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/images/big-logo.png")} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Dxb News Network</Text>

      <TouchableOpacity style={[styles.button, styles.googleButton]} activeOpacity={0.7}>
        <FontAwesome name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.numberButton]} activeOpacity={0.7}>
        <FontAwesome name="mobile" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Number</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.appleButton]} activeOpacity={0.7}>
        <FontAwesome name="apple" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Apple ID</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.facebookButton]} activeOpacity={0.7}>
        <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
  numberButton: {
    backgroundColor: "#2563EB",
  },
  appleButton: {
    backgroundColor: "#333",
  },
  facebookButton: {
    backgroundColor: "#1877F2",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    position: "absolute",
    left: 15,
  },
  footerText: {
    marginTop: 20,
    color: "white",
  },
  signUpText: {
    color: "#FACC15",
    fontWeight: "bold",
  },
});

export default SignupPage;
