import { SafeAreaView, StyleSheet, View } from 'react-native';

import TopBar from '@/components/TopBar';
import RunningText from '@/components/RunningText';
import BreakingNewsSlider from '@/components/BreakingNewsSlider';
import { ThemedView } from '@/components/ThemedView';
import NewsFeed from '@/components/NewsFeed';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Bar */}
      <TopBar />

      {/* Running Text Below the Top Bar */}
      <View style={styles.runningTextContainer}>
        <RunningText />
      </View>

      {/* Main Content */}
      <ThemedView style={styles.content}>
        <BreakingNewsSlider />
        <NewsFeed />
      </ThemedView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  runningTextContainer: {
    marginTop: 10,
  },
  content: {
    flex: 1, // Ensures BreakingNewsSlider takes available space
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});
