
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TopBar from '@/components/TopBar';
import RunningText from '@/components/RunningText';
import { ThemedView } from '@/components/ThemedView';
import BookmarkScreen from '@/components/BookmarkScreen';

const saved = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TopBar />
      <View style={styles.runningTextContainer}>
        <RunningText />
      </View>

      {/* Main Content */}
      <ThemedView style={styles.content}>
      <BookmarkScreen />
      </ThemedView>
    </SafeAreaView>
  
  )
}

export default saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
})