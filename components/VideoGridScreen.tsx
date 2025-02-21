import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Video from 'react-native-video';


const categories = ['All', 'Politics', 'Entertainment', 'Fashion', 'Sports'];

// Import local images at the top
const videoThumbnail = require('../assets/images/video1.png');

const videoData = [
  {
    id: '1',
    title: 'Political News Update',
    category: 'Politics',
    thumbnail: videoThumbnail, // Use variable
    videoUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  },
  {
    id: '2',
    title: 'Entertainment Gossip',
    category: 'Entertainment',
    thumbnail: videoThumbnail,
    videoUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  },
  {
    id: '3',
    title: 'Sports Highlights',
    category: 'Sports',
    thumbnail: { uri: 'https://via.placeholder.com/300' }, // Remote Image Example
    videoUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  },
];

export default function VideoGridScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtered video list based on selected category
  const filteredVideos =
    selectedCategory === 'All'
      ? videoData
      : videoData.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <FontAwesome name="arrow-left" size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Videos</Text>
      </View>

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

      {/* Video Grid */}
      <FlatList
        data={filteredVideos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        removeClippedSubviews={true}
        contentContainerStyle={styles.videoGrid}
        renderItem={({ item }) => (
          <View style={styles.videoCard}>
            <TouchableOpacity style={styles.videoContainer} onPress={() => console.log('Play Video', item.id)}>
              <Image source={item.thumbnail} style={styles.videoThumbnail} />
              <View style={styles.playButton}>
                <FontAwesome name="play-circle" size={36} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={styles.videoTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    // flexWrap: 'wrap',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#0066FF',
  },
  tabText: {
    color: '#333',
    fontSize: 14,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  videoGrid: {
    paddingBottom: 20,
  },
  videoCard: {
    flex: 1,
    margin: 5,
  },
  videoContainer: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
  },
  videoTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
});
