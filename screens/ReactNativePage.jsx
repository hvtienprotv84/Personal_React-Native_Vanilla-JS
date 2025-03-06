// ReactNativePage.jsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ReactNativePage = ({ onBackPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the React Native Page!</Text>
      <Button title="Back to Projects" onPress={onBackPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ReactNativePage;
