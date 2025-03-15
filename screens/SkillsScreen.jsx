import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Switch, Image, Linking } from 'react-native';

const skills = [
    { name: 'HTML', imageUrl: require('../assets/logo_skill/html.png'), link: 'html' },
    { name: 'CSS', imageUrl: require('../assets/logo_skill/css.png'), link: 'css' },
    { name: 'JavaScript', imageUrl: require('../assets/logo_skill/javascript.png'), link: 'javascript' },
    { name: 'TypeScript', imageUrl: require('../assets/logo_skill/typescript.png'), link: 'typescript' },
    { name: 'ReactJS', imageUrl: require('../assets/logo_skill/react.png'), link: 'react' },
    { name: 'React Native', imageUrl: require('../assets/logo_skill/reactnative.png'), link: 'reactnative' },
    { name: 'VueJS', imageUrl: require('../assets/logo_skill/vue.png'), link: 'vue' },
    { name: 'NextJS', imageUrl: require('../assets/logo_skill/next.png'), link: 'next' },
    { name: 'Angular', imageUrl: require('../assets/logo_skill/angular.png'), link: 'angular' },
    { name: 'Redux', imageUrl: require('../assets/logo_skill/redux.png'), link: 'redux' },
    { name: 'API', imageUrl: require('../assets/logo_skill/api.png'), link: 'api' },
    { name: 'Tailwind CSS', imageUrl: require('../assets/logo_skill/tailwindcss.png'), link: 'tailwind' },
    { name: 'Bootstrap', imageUrl: require('../assets/logo_skill/bootstrap.png'), link: 'bootstrap' },
    { name: 'SASS', imageUrl: require('../assets/logo_skill/sass.png'), link: 'sass' },
    { name: 'Docker', imageUrl: require('../assets/logo_skill/docker.png'), link: 'docker' },
    { name: 'SQL Server', imageUrl: require('../assets/logo_skill/sqlserver.png'), link: 'sqlserver' },
    { name: 'MySQL', imageUrl: require('../assets/logo_skill/mysql.png'), link: 'mysql' },
    { name: 'MongoDB', imageUrl: require('../assets/logo_skill/mongo.png'), link: 'mongo' },
    { name: 'Git', imageUrl: require('../assets/logo_skill/git.png'), link: 'git' },
    { name: 'Github', imageUrl: require('../assets/logo_skill/github2.png'), link: 'github' },
    { name: 'Vercel', imageUrl: require('../assets/logo_skill/vercel.png'), link: 'vercel' },
    { name: 'Expo', imageUrl: require('../assets/logo_skill/expo.png'), link: 'expo' },
    { name: 'Photoshop', imageUrl: require('../assets/logo_skill/photoshop.png'), link: 'photoshop' },
    { name: 'Figma', imageUrl: require('../assets/logo_skill/figma.png'), link: 'figma' },
    { name: 'Responsive', imageUrl: require('../assets/logo_skill/responsive.png'), link: 'responsive' },

  ];

export default function SkillsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

    const handlePress = (link) => {
        // Mở liên kết trong ứng dụng
        if (link === 'html') {
          Linking.openURL('https://vi.wikipedia.org/wiki/HTML'); // Liên kết đến trang React Native
        } else if (link === 'css') {
          Linking.openURL('https://vi.wikipedia.org/wiki/CSS');
        } else if (link === 'javascript') {
          Linking.openURL('https://vi.wikipedia.org/wiki/JavaScript');
        } else if (link === 'typescript') {
          Linking.openURL('https://www.typescriptlang.org/');
        } else if (link === 'react') {
          Linking.openURL('https://react.dev/');
        } else if (link === 'reactnative') {
          Linking.openURL('https://reactnative.dev/');
        } else if (link === 'vue') {
          Linking.openURL('https://vuejs.org/');
        } else if (link === 'next') {
          Linking.openURL('https://nextjs.org/');
        } else if (link === 'angular') {
          Linking.openURL('https://angular.dev/');
        } else if (link === 'redux') {
          Linking.openURL('https://redux.js.org/');
        } else if (link === 'api') {
          Linking.openURL('https://aws.amazon.com/vi/what-is/api/');
        } else if (link === 'tailwind') {
          Linking.openURL('https://tailwindcss.com/');
        } else if (link === 'bootstrap') {
          Linking.openURL('https://getbootstrap.com/');
        } else if (link === 'sass') {
          Linking.openURL('https://sass-lang.com/');
        } else if (link === 'docker') {
          Linking.openURL('https://www.docker.com/');
        } else if (link === 'sqlserver') {
          Linking.openURL('https://vi.wikipedia.org/wiki/Microsoft_SQL_Server');
        } else if (link === 'mysql') {
          Linking.openURL('https://www.mysql.com/');
        } else if (link === 'mongo') {
          Linking.openURL('https://www.mongodb.com/');
        } else if (link === 'git') {
          Linking.openURL('https://git-scm.com/');
        } else if (link === 'github') {
          Linking.openURL('https://en.wikipedia.org/wiki/GitHub');
        } else if (link === 'vercel') {
          Linking.openURL('https://en.wikipedia.org/wiki/Vercel');
        } else if (link === 'expo') {
          Linking.openURL('https://viblo.asia/p/bat-dau-voi-react-native-va-expo-6J3Zgo2RZmB');
        } else if (link === 'photoshop') {
          Linking.openURL('https://www.adobe.com/vn_vi/products/photoshop.html');
        } else if (link === 'figma') {
          Linking.openURL('https://www.figma.com/');
        } else if (link === 'responsive') {
          Linking.openURL('https://vi.wikipedia.org/wiki/Thi%E1%BA%BFt_k%E1%BA%BF_web_%C4%91%C3%A1p_%E1%BB%A9ng');
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
        <TouchableOpacity onPress={() => handlePress(item.link)}>
        <View style={styles.skillCard}>
          {/* Hiển thị ảnh */}
          <Image source={item.imageUrl} style={styles.image} />
          {/* Hiển thị tên kỹ năng */}
          <Text style={styles.skillText}>{item.name}</Text>
        </View>
        </TouchableOpacity>
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
