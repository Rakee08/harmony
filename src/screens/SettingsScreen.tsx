import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export const SettingsScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Settings</Text>
    <Text style={styles.subtitle}>Manage app preferences and audio options.</Text>
    <View style={styles.placeholderCard}>
      <Text style={styles.placeholderText}>Hardcoded settings content will appear here.</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#09090E',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#B3B3C4',
    fontSize: 14,
    marginBottom: 22,
  },
  placeholderCard: {
    backgroundColor: '#15151D',
    borderRadius: 18,
    padding: 20,
  },
  placeholderText: {
    color: '#8A8AA8',
    fontSize: 14,
    lineHeight: 20,
  },
});
