import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_MARGIN = 10;
const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

const newsData = [
  {
    id: '1',
    title: 'Breaking News 1',
    description: "Kolkata doctor rape-murder case gets murkier as BJP posts fresh video of victim's parents.",
    image: { uri: 'https://img.youtube.com/vi/ANd5zEOqwTg/mqdefault.jpg' },
  },
  {
    id: '2',
    title: 'Breaking News 2',
    description: "Major earthquake in Asia; tremors felt across multiple countries.",
    image: { uri: 'https://www.dxbnewsnetwork.com/upload/blog/Smart_Tourism.jpg' },
  },
  {
    id: '3',
    title: 'Breaking News 3',
    description: "Stock market crashes amid global recession fears.",
    image: { uri: 'https://www.dxbnewsnetwork.com/upload/blog/Technology_6.jpg' },
  },
  {
    id: '4',
    title: 'Breaking News 4',
    description: "New AI technology changes the job market forever.",
    image: { uri: 'https://www.dxbnewsnetwork.com/upload/blog/Saudi_Arabia_welcomes_Trump-Putin_summit.jpg' },
  },
];

export default function BreakingNewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const viewabilityConfig = useMemo(() => ({ viewAreaCoveragePercentThreshold: 50 }), []);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= newsData.length) {
        nextIndex = 0; // Loop back to start
      }
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, AUTO_SCROLL_INTERVAL);

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Breaking News</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Multi-Slide Carousel */}
      <FlatList
        ref={flatListRef}
        data={newsData}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.badge}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {newsData.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
  },
  slide: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_MARGIN,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  badge: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  description: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});
