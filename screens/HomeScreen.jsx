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
        <Text style={styles.subtitle}>Software Developer</Text>

        <TouchableOpacity onPress={openCV}>
            <View style={styles.container_CVImage}>
                <Image source={require('../assets/q2.png')} style={styles.CVImage} />
                <Text style={styles.text_CV}>Tải CV</Text>
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
        width: 220,
        height: 220,
        borderRadius: 110,
        marginBottom: 20,
        borderColor: isDarkMode ? '#ffffff' : '#ffffff00',
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
        color: isDarkMode ? '#bbbbbb' : '#555555',
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
    });
    };
