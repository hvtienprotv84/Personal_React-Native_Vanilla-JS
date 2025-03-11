import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Switch, Image, Linking } from 'react-native';

const skills = [
    { name: 'HTML', imageUrl: require('../assets/logo_skill/html.png'), link: 'reactnative' },
    { name: 'CSS', imageUrl: require('../assets/logo_skill/css.png'), link: 'reactnative' },
    { name: 'JavaScript', imageUrl: require('../assets/logo_skill/javascript.png'), link: 'reactnative' },
    { name: 'TypeScript', imageUrl: require('../assets/logo_skill/typescript.png'), link: 'reactnative' },
    { name: 'ReactJS', imageUrl: require('../assets/logo_skill/react.png'), link: 'reactnative' },
    { name: 'React Native', imageUrl: require('../assets/logo_skill/reactnative.png'), link: 'reactnative' },
    { name: 'VueJS', imageUrl: require('../assets/logo_skill/vue.png'), link: 'reactnative' },
    { name: 'NextJS', imageUrl: require('../assets/logo_skill/next.png'), link: 'reactnative' },
    { name: 'Angular', imageUrl: require('../assets/logo_skill/angular.png'), link: 'reactnative' },
    { name: 'Redux', imageUrl: require('../assets/logo_skill/redux.png'), link: 'reactnative' },
    { name: 'API', imageUrl: require('../assets/logo_skill/api.png'), link: 'reactnative' },
    { name: 'Tailwind CSS', imageUrl: require('../assets/logo_skill/tailwindcss.png'), link: 'reactnative' },
    { name: 'Bootstrap', imageUrl: require('../assets/logo_skill/bootstrap.png'), link: 'reactnative' },
    { name: 'SASS', imageUrl: require('../assets/logo_skill/sass.png'), link: 'reactnative' },
    { name: 'Docker', imageUrl: require('../assets/logo_skill/docker.png'), link: 'reactnative' },
    { name: 'SQL Server', imageUrl: require('../assets/logo_skill/sqlserver.png'), link: 'reactnative' },
    { name: 'MySQL', imageUrl: require('../assets/logo_skill/mysql.png'), link: 'reactnative' },
    { name: 'MongoDB', imageUrl: require('../assets/logo_skill/mongo.png'), link: 'reactnative' },
    { name: 'Git', imageUrl: require('../assets/logo_skill/git.png'), link: 'reactnative' },
    { name: 'Github', imageUrl: require('../assets/logo_skill/github2.png'), link: 'reactnative' },
    { name: 'Vercel', imageUrl: require('../assets/logo_skill/vercel.png'), link: 'reactnative' },
    { name: 'Expo', imageUrl: require('../assets/logo_skill/expo.png'), link: 'reactnative' },
    { name: 'Photoshop', imageUrl: require('../assets/logo_skill/photoshop.png'), link: 'reactnative' },
    { name: 'Figma', imageUrl: require('../assets/logo_skill/figma.png'), link: 'reactnative' },
    { name: 'Responsive', imageUrl: require('../assets/logo_skill/responsive.png'), link: 'reactnative' },

  ];

export default function SkillsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

    const handlePress = (link) => {
        // Mở liên kết trong ứng dụng
        if (link === 'reactnative') {
          Linking.openURL('https://reactnative.dev'); // Liên kết đến trang React Native
        } else if (link === 'mysql') {
          Linking.openURL('https://www.mysql.com'); // Liên kết đến trang MySQL
        } else if (link === 'git') {
          Linking.openURL('https://git-scm.com'); // Liên kết đến trang Git
        } else if (link === 'github') {
          Linking.openURL('https://github.com'); // Liên kết đến trang GitHub
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>


            <Text style={styles.title}>My Skills</Text>

            {/* <FlatList
                data={skills}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.skillCard}>
                        <Text style={styles.skillText}>• {item}</Text>
                        <Text style={styles.skillText}>• {item}</Text>
                    </View>
                )}
            /> */}

            <FlatList
      data={skills}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.skillCard}>
          {/* Hiển thị ảnh */}
          <Image source={item.imageUrl} style={styles.image} />
          <TouchableOpacity onPress={() => handlePress(item.link)}>
          {/* Hiển thị tên kỹ năng */}
          <Text style={styles.skillText}>{item.name}</Text>
          </TouchableOpacity>

        </View>
      )}
    />

        </View>
    );
}

const createStyles = (isDarkMode) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: isDarkMode ? '#121212' : '#f9f9f9',
        },
        switchContainer: {
            position: 'absolute',
            top: 10,
            right: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            fontSize: 28,
            fontWeight: '600',
            paddingTop: 30,
            marginVertical: 20,
            textAlign: 'center',
            color: isDarkMode ? '#ffffff' : '#333',
            fontFamily: 'Roboto', // Optional: Use a modern font family
        },
        skillCard: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: isDarkMode ? '#333' : '#ffffff',
            padding: 15,
            marginVertical: 10,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 5,
        },
        skillText: {
            fontSize: 18,
            color: isDarkMode ? '#ffffff' : '#333',
            fontFamily: 'Roboto', // Optional: Use a modern font family
            marginLeft: 10,
            fontWeight: "bold",
        },
        text: {
            fontSize: 16,
            color: isDarkMode ? '#ffffff' : '#333',
            marginRight: 10,
        },
    });
};
