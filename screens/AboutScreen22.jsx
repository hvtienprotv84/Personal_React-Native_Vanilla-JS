import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Đổi import

// Thêm các hàm hỗ trợ caching
const fetchDataFromCache = async () => {
  try {
    const cachedData = await AsyncStorage.getItem('data');
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (error) {
    console.error('Error fetching from cache:', error);
    return null;
  }
};

const saveDataToCache = async (data) => {
  try {
    await AsyncStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // Kiểm tra dữ liệu cache trước khi gọi API
      const cachedData = await fetchDataFromCache();
      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return;
      }

      // Nếu không có cache, gọi API
      const response = await axios.get('https://hvtienprotv84.github.io/fetchapi-main/data.json');
      setData(response.data);
      saveDataToCache(response.data);  // Lưu dữ liệu vào cache
    } catch (error) {
      // Log lỗi chi tiết
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      
      if (error.response) {
        // Nếu có lỗi từ server (response có status)
        console.error('Response error:', error.response.data);
        console.error('Response status:', error.response.status);
      } else if (error.request) {
        // Nếu không nhận được phản hồi từ server
        console.error('Request error:', error.request);
      } else {
        // Lỗi xảy ra trong quá trình setting hoặc gọi API
        console.error('Error message:', error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data && data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={[styles.title_API_JSON, styles.name]}>{item.name}</Text>
          <Text style={[styles.title_API_JSON, styles.technologies]}>{item.technologies}</Text>
          <Text style={[styles.title_API_JSON, styles.content]}>{item.content}</Text>
          <View style={[styles.container_graduate]}>
            <Text style={[styles.text_graduate]}>Graduate: </Text>
            <Text style={[styles.title_API_JSON, styles.graduate]}>{item.graduate}</Text>
          </View>
          <View style={[styles.container_graduate]}>
            <Text style={[styles.text_graduate]}>Experience: </Text>
            <Text style={[styles.title_API_JSON, styles.graduate]}>{item.exp}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title_API_JSON: {
    fontSize: 16,
    marginVertical: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  technologies: {
    fontStyle: 'italic',
  },
  content: {
    marginBottom: 10,
  },
  container_graduate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_graduate: {
    fontSize: 14,
    color: '#333',
  },
  graduate: {
    fontSize: 14,
    color: '#555',
  },
};

export default App;
