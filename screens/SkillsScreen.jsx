import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';

const skills = [
    'React Native',
    'Data Analysis & Visualization: Tools: Pandas, NumPy; Libraries: Matplotlib, Seaborn, Plotly',
    'Streamlit',
    'REST APIs',
    'Python (Programming Language)',
    'MERN Stack',
    'Express.js',
    'MongoDB',
    'TypeScript',
    'Node.js',
    'Prompt Engineering AI Tools',
    'Web Applications',
    'Firebase',
    'Version Control Systems',
    'Java',
    'Software Development',
    'React.js',
    'Tailwind CSS',
    'jQuery',
    'Bootstrap 5 (Framework)',
    'JavaScript',
    'CSS',
    'HTML',
    'Front-End Development',
    'Arabic',
    'English',
    'Web Development',
    'Programming',
    'Information Systems',
    'MySQL',
    'Git',
    'GitHub',
];

export default function SkillsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

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

            <FlatList
                data={skills}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.skillCard}>
                        <Text style={styles.skillText}>• {item}</Text>
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
        },
        text: {
            fontSize: 16,
            color: isDarkMode ? '#ffffff' : '#333',
            marginRight: 10,
        },
    });
};
