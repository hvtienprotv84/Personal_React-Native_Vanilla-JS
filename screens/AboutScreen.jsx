import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function AboutScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Gọi API sử dụng Fetch thay vì Axios
  //   fetch('https://hvtienprotv84.github.io/fetchapi-main/data.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();  // Chuyển đổi dữ liệu JSON
  //     })
  //     .then(data => {
  //       console.log(data);  // Debug dữ liệu
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);


  useEffect(() => {
    // Gọi API sử dụng Axios
    axios.get('https://hvtienprotv84.github.io/fetchapi-main/data.json')
      .then(response => {
        console.log(response.data);  // Debug dữ liệu
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Hiển thị khi đang tải dữ liệu
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


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
      {/* <Text style={styles.title}>About Me</Text> */}
      {/* <Text style={styles.text}>
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
      </Text> */}
      <ScrollView contentContainerStyle={styles.container}>
      {data && data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title_API_JSON}>{item.name}</Text>
          <Text style={styles.title_API_JSON}>{item.technologies}</Text>
          <Text style={styles.title_API_JSON}>{item.content}</Text>
          <Text style={styles.title_API_JSON}>Graduate: {item.graduate}</Text>
          <Text style={styles.title_API_JSON}>Experience: {item.exp}</Text>
        </View>
      ))}
    </ScrollView>

    <View style={styles.Container_API_JSON}>
      <Text style={styles.title_API_JSON}>Dữ liệu được tạo và hiển thị bởi </Text>
        <Image source={require('../assets/api_json.png')} style={styles.Image_API_JSON} />
      <Text style={styles.title_API_JSON}> API JSON</Text>
    </View>

    <View style={styles.divider} />

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
    Image_API_JSON:{
      width: 15,
      height: 15,
    },
    Container_API_JSON:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    title_API_JSON: {
      color: isDarkMode ? "#ffffff" : "#333",

    },
  });
};
