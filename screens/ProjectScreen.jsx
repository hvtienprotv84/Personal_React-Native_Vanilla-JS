import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Switch } from 'react-native';

const projects = [
    { id: '1', name: 'E-commerce App', description: 'Built with MERN Stack', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Hospital Management System', description: 'Python, MySQL, Tkinter', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Real-time Chat App', description: 'Node.js, Express.js, MongoDB', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Project Management Tool', description: 'React, Node.js, MongoDB', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Task Tracker App', description: 'React Native, Firebase', image: 'https://via.placeholder.com/100' },
    { id: '6', name: 'Weather App', description: 'React.js, OpenWeather API', image: 'https://via.placeholder.com/100' },
    { id: '7', name: 'Social Media Dashboard', description: 'Next.js, GraphQL', image: 'https://via.placeholder.com/100' },
    { id: '8', name: 'Booking System', description: 'Python, Django, PostgreSQL', image: 'https://via.placeholder.com/100' },
    { id: '9', name: 'Inventory Management', description: 'React.js, Node.js, MySQL', image: 'https://via.placeholder.com/100' },
    { id: '10', name: 'Expense Tracker', description: 'React, Redux, Firebase', image: 'https://via.placeholder.com/100' },
    { id: '11', name: 'Travel Agency Website', description: 'HTML, CSS, JavaScript', image: 'https://via.placeholder.com/100' },
    { id: '12', name: 'Portfolio Website', description: 'React.js, Tailwind CSS', image: 'https://via.placeholder.com/100' },
    { id: '13', name: 'Blog Platform', description: 'Node.js, Express.js, MongoDB', image: 'https://via.placeholder.com/100' },
    { id: '14', name: 'Learning Management System', description: 'React, Node.js, MongoDB', image: 'https://via.placeholder.com/100' },
    { id: '15', name: 'Chatbot App', description: 'Python, Flask, NLP', image: 'https://via.placeholder.com/100' }
];

export default function ProjectsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.projectCard}>
                        <Image source={{ uri: item.image }} style={styles.projectImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.projectTitle}>{item.name}</Text>
                            <Text style={styles.projectDescription}>{item.description}</Text>
                        </View>
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
            backgroundColor: isDarkMode ? '#121212' : '#ffffff',
            padding: 20,
        },
        switchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
        },
        switchText: {
            fontSize: 16,
            color: isDarkMode ? '#ffffff' : '#000000',
        },
        projectCard: {
            padding: 15,
            marginBottom: 15,
            backgroundColor: isDarkMode ? '#333' : '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
        },
        projectImage: {
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 15,
        },
        textContainer: {
            flex: 1,
        },
        projectTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: isDarkMode ? '#ffffff' : '#000000',
            marginBottom: 5,
        },
        projectDescription: {
            fontSize: 14,
            color: isDarkMode ? '#bbbbbb' : '#666666',
        },
    });
};
