import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
} from "react-native";

export default function AboutScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = createStyles(isDarkMode);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <Image
        source={require("../assets/hero2.png")}
        style={styles.profileImage}
      />
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.text}>
        When I'm not coding, I love exploring new technologies, sharing
        knowledge, and collaborating with like-minded professionals to build
        impactful projects.
      </Text>
    </ScrollView>
  );
}

const createStyles = (isDarkMode) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: "center",
      padding: 20,
      backgroundColor: isDarkMode ? "#121212" : "#f0f4f8",
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
      borderWidth: 3,
      borderColor: isDarkMode ? "#ffffff" : "#007bff",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#333",
      marginBottom: 15,
    },
    text: {
      fontSize: 16,
      textAlign: "center",
      lineHeight: 24,
      marginBottom: 20,
      paddingHorizontal: 10,
      color: isDarkMode ? "#ffffff" : "#000000",
    },
    divider: {
      width: "80%",
      height: 1,
      backgroundColor: "#ccc",
      marginVertical: 20,
    },
    switchContainer: {
      position: "absolute",
      top: 10,
      right: 10,
    },
  });
};
