import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const video = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Video Page</Text>
  </View>
  )
}

export default video

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