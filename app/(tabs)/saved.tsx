
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TopBar from '@/components/TopBar';
import RunningText from '@/components/RunningText';
import { ThemedView } from '@/components/ThemedView';
import BookmarkScreen from '@/components/BookmarkScreen';


const saved = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* Main Content */}
      <ThemedView style={styles.content}>
      
      <BookmarkScreen />
      </ThemedView>
    </SafeAreaView>
  
  )
}

export default saved;

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