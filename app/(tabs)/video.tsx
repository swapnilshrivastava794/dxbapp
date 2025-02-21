import { SafeAreaView, StyleSheet, View } from 'react-native';

import TopBar from '@/components/TopBar';
import RunningText from '@/components/RunningText';
import { ThemedView } from '@/components/ThemedView';
import VideoGridScreen from '@/components/VideoGridScreen';

const VideoScreen = () => {
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
        <VideoGridScreen />
      </ThemedView>
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure SafeAreaView fills screen
    backgroundColor: '#f8f9fa',
  },
  runningTextContainer: {
    marginVertical: 10,
  },
  content: {
    flex: 1, // Make ThemedView expand
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
