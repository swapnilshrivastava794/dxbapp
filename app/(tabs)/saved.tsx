import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const saved = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Saved Page</Text>
  </View>
  )
}

export default saved

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