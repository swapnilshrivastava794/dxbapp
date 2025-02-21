import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['All', 'Politics', 'Entertainment', 'Fashion'];

const newsData = [
  {
    id: '1',
    username: 'Raman__Singh',
    title: 'Amazon Super Value Days: Get up to 50% off on the best ghee brands and make.',
    time: '5:40 PM',
    date: 'Today',
    comments: 35,
    category: 'Politics', // Assigned category
    userAvatar: require('../assets/images/user1.png'),
    postImage: require('../assets/images/news1.png'),
  },
  {
    id: '2',
    username: 'Raman__Singh',
    title: 'Amazon Super Value Days: Get up to 50% off on the best ghee brands and make.',
    time: '5:40 PM',
    date: 'Today',
    comments: 35,
    category: 'Entertainment', // Assigned category
    userAvatar: require('../assets/images/user1.png'),
    postImage: require('../assets/images/news1.png'),
  },
  {
    id: '3',
    username: 'Raman__Singh',
    title: 'Amazon Super Value Days: Get up to 50% off on the best ghee brands and make.',
    time: '5:40 PM',
    date: 'Today',
    comments: 35,
    category: 'Fashion', // Assigned category
    userAvatar: require('../assets/images/user1.png'),
    postImage: require('../assets/images/news1.png'),
  },
  {
    id: '4',
    username: 'Raman__Singh',
    title: 'Amazon Super Value Days: Get up to 50% off on the best ghee brands and make.',
    time: '5:40 PM',
    date: 'Today',
    comments: 35,
    category: 'Politics', // Another Politics news
    userAvatar: require('../assets/images/user1.png'),
    postImage: require('../assets/images/news1.png'),
  },
  {
    id: '5',
    username: 'Raman__Singh',
    title: 'Amazon Super Value Days: Get up to 50% off on the best ghee brands and make.',
    time: '5:40 PM',
    date: 'Today',
    comments: 35,
    category: 'Politics', // Another Politics news
    userAvatar: require('../assets/images/user1.png'),
    postImage: require('../assets/images/news1.png'),
  },
];

export default function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // **Filter News Data based on selected category**
  const filteredNews = selectedCategory === 'All'
    ? newsData
    : newsData.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Tabs Section */}
      <View style={styles.tabContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.tabButton, selectedCategory === category && styles.activeTab]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.tabText, selectedCategory === category && styles.activeTabText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* News List */}
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* User Section */}
            <View style={styles.userSection}>
              <Image source={item.userAvatar} style={styles.avatar} />
              <Text style={styles.username}>{item.username}</Text>
            </View>

            {/* Title Section */}
            <Text style={styles.title}>{item.title}</Text>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
              <View style={styles.info}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>

              <View style={styles.commentsSection}>
                <Image source={item.postImage} style={styles.postImage} />
                <Text style={styles.comments}>{item.comments} Comments</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#0066FF',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Android shadow
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    color: 'gray',
    marginRight: 5,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  commentsSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  comments: {
    fontSize: 14,
    color: 'gray',
  },
});
