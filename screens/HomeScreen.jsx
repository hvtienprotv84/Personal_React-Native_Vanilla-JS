    import React, { useState } from 'react';
    import { View, Text, Image, StyleSheet, Switch, ScrollView, TouchableOpacity, Linking } from 'react-native';

    const social_network = [
        { name: 'Facebook', imageUrl: require('../assets/social_network/facebook2.png'), link: 'facebook' },
        { name: 'Zalo', imageUrl: require('../assets/social_network/zalo3.png'), link: 'zalo' },
        { name: 'Phone', imageUrl: require('../assets/social_network/phone3.png'), link: 'phone' },
        { name: 'GitHub', imageUrl: require('../assets/social_network/github2.png'), link: 'github' },
        { name: 'Web', imageUrl: require('../assets/social_network/web3.png'), link: 'web' },

      ];

    export default function HomeScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

    const handlePress = (link) => {
            // Mở liên kết trong ứng dụng
            if (link === 'facebook') {
              Linking.openURL('https://www.facebook.com/vinhtien.huynh.77'); // Liên kết đến trang React Native
            } else if (link === 'zalo') {
              Linking.openURL('https://zalo.me/0931103224'); // Liên kết đến trang MySQL
            } else if (link === 'phone') {
              Linking.openURL('tel:0931103224'); // Liên kết đến trang Git
            } else if (link === 'github') {
              Linking.openURL('https://github.com/hvtienprotv84'); // Liên kết đến trang GitHub
            } else if (link === 'web') {
              Linking.openURL('https://prsonal-portfolio-main.vercel.app/'); // Liên kết đến trang GitHub
            }

          };

          const openCV= () => {
            Linking.openURL('https://www.google.com');
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
        <Text style={styles.welcomeTitle}>Xin Chào!</Text>
        <Image source={require('../assets/hero2.png')} style={styles.profileImage} />
        <Text style={styles.title}>Huỳnh Vĩnh Tiến</Text>
        <Text style={styles.subtitle}>Software Engineer</Text>

        {/* <TouchableOpacity onPress={openCV}>
            <View style={styles.container_CVImage}>
                <Image source={require('../assets/q2.png')} style={styles.CVImage} />
                <Text style={styles.text_CV}>Tải CV</Text>
            </View>
        </TouchableOpacity> */}

        <View style={styles.divider} />

        <TouchableOpacity style={styles.button} onPress={openCV}>
          <Image
            source={require('../assets/pdf2.png')} // Replace with your actual image path
            style={styles.icon}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text1}>Resume | CV</Text>
            <Text style={styles.text2}>Version 1.0</Text>
          </View>
        </TouchableOpacity>
        

        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {social_network.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handlePress(item.link)}>
                <Image source={item.imageUrl} style={styles.image_social_network} />
            </TouchableOpacity>
        </View>
        ))}
        </ScrollView>
        </View>
    );
    }

    const createStyles = (isDarkMode) => {
    return StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkMode ? '#121212' : '#ffffff',
        },
        switchContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        },
        profileImage: {
        width: 200,
        height: 200,
        borderRadius: 110,
        marginBottom: 20,
        borderColor: isDarkMode ? '#ffffff' : '#007bff',
        borderWidth: 2,
        },
        title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: isDarkMode ? '#ffffff' : '#000000',
        },
        subtitle: {
        fontSize: 22,
        fontWeight: '500',
        color: isDarkMode ? '#fff' : '#000',
        },
        welcomeTitle: {
        marginTop: 30,
        paddingBottom: 40,
        fontSize: 24,
        fontWeight: 'bold',
        color: isDarkMode ? '#ffffff' : '#000000',
        },
        text: {
            fontSize: 15,
            color: isDarkMode ? 'white' : 'black',
        },
        CVImage: {
         width: 40,
         height: 40,
        },
        text_CV:{
        fontSize: 24,
        marginLeft: 5,
        fontWeight: "bold", 
        color: isDarkMode ? 'white' : 'black',
        },
        container_CVImage:{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        marginTop: 10,
        },
        image_social_network:{
         width: 60,
         height: 60,
         marginLeft: 10,
        },
        scrollView:{
         marginTop: 20,

        },

        button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: isDarkMode ? '#ffffff' : '#000000',
        borderRadius: 10,
        // backgroundColor: 'rgb(255, 255, 255)',
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        paddingVertical: 10, // 0.625rem => 10px
        paddingHorizontal: 8, // 0.5rem => 8px
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        outlineWidth: 0,
        transitionDuration: '0.8s', // Note: React Native doesn't directly support transitions, but you can use animations for similar effects
        marginTop: 10,
        borderStyle: 'dashed', // Dashed border
      },
      icon: {
        width: 46,
        height: 48,
      },
      textContainer: {
        marginLeft: 4, // 0.2rem => 4px
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1,
        marginTop: 5,
      },
      text1: {
        fontSize: 16, // 0.75rem => 12px
        lineHeight: 16, // 1rem => 16px
        // color: '#000000',
        fontWeight: 'bold',
        padding: 5,
        color: isDarkMode ? '#ffffff' : '#000000',
      },
      text2: {
        marginBottom: 4, // 0.25rem => 4px
        // color: '#000000',
        fontSize: 12, // 0.75rem => 12px
        padding: 5,
        paddingTop: -5,
        color: isDarkMode ? '#ffffff' : '#000000',
      },
      divider: {
      // width: "80%",
      width: "50%",
      height: 1,
      backgroundColor: "#ccc",
      marginVertical: 10,
      fontWeight: 'bold',
    },
    });
};
