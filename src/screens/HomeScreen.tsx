import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Harmony</Text>
      <Text>Premium Offline Music Player</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});