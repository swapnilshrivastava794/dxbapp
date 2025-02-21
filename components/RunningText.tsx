import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function RunningText() {
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -200,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { transform: [{ translateX: scrollX }] }]}>
        Today Breaking News! Today Breaking News! Today Breaking News! Today Breaking News!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '200%',
    backgroundColor: '#E14A4A',
    overflow: 'hidden',
    paddingVertical: 10,
    marginTop: 95, // Ensure it's placed below the top bar, adjust based on your top bar height
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
